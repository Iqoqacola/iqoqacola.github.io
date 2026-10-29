import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { DragControls } from "./DragControls";
import { useTheme } from "../../useTheme";

const GOLD = new THREE.Color("#D4AF37");
const CYAN = new THREE.Color("#66FCF1");
const DIM = new THREE.Color("#2A2E36");
const PLATINUM = new THREE.Color("#C5C6C7");

// Light mode reads like a technical drawing: light panels, dark outlines
const style = { fill: "#1B1E26" };

const applyPalette = (light) => {
  GOLD.set(light ? "#876A10" : "#D4AF37");
  CYAN.set(light ? "#0E9F96" : "#66FCF1");
  PLATINUM.set(light ? "#1F2833" : "#C5C6C7");
  DIM.set(light ? "#C4C9D0" : "#2A2E36");
  style.fill = light ? "#F4F5F7" : "#1B1E26";
};

// A server rack built from primitives, so no model file is needed
const UNITS = 6;
const UNIT_H = 0.42;
const LEDS_PER_UNIT = 4;
const LED_COUNT = UNITS * LEDS_PER_UNIT;

function Outlined({ geometry, position, color = PLATINUM, opacity = 0.5, fill = style.fill }) {
  const outline = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);
  useEffect(() => () => outline.dispose(), [outline]);

  return (
    <group position={position}>
      {fill && (
        <mesh geometry={geometry}>
          <meshStandardMaterial color={fill} roughness={0.6} metalness={0.3} />
        </mesh>
      )}
      <lineSegments geometry={outline}>
        <lineBasicMaterial color={color} transparent opacity={opacity} />
      </lineSegments>
    </group>
  );
}

function Leds({ animate }) {
  const ref = useRef();
  const color = useMemo(() => new THREE.Color(), []);
  const leds = useMemo(
    () =>
      Array.from({ length: LED_COUNT }, (_, i) => ({
        unit: Math.floor(i / LEDS_PER_UNIT),
        slot: i % LEDS_PER_UNIT,
        speed: 1.5 + Math.random() * 4,
        phase: Math.random() * Math.PI * 2,
        tint: Math.random() > 0.3 ? GOLD : CYAN,
      })),
    [],
  );

  useLayoutEffect(() => {
    const dummy = new THREE.Object3D();
    leds.forEach((led, i) => {
      const y = (led.unit - (UNITS - 1) / 2) * UNIT_H;
      dummy.position.set(0.45 + led.slot * 0.1, y, 0.51);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
      ref.current.setColorAt(i, led.tint);
    });
    ref.current.instanceMatrix.needsUpdate = true;
    ref.current.instanceColor.needsUpdate = true;
  }, [leds]);

  useFrame(({ clock }) => {
    if (!animate) return;
    const t = clock.elapsedTime;
    leds.forEach((led, i) => {
      const on = Math.sin(t * led.speed + led.phase) > 0.2;
      ref.current.setColorAt(i, color.copy(on ? led.tint : DIM));
    });
    ref.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, LED_COUNT]}>
      <sphereGeometry args={[0.025, 8, 8]} />
      <meshBasicMaterial toneMapped={false} />
    </instancedMesh>
  );
}

function Rack({ animate }) {
  const group = useRef();
  const geometries = useMemo(
    () => ({
      frame: new THREE.BoxGeometry(1.6, UNITS * UNIT_H + 0.3, 1.2),
      unit: new THREE.BoxGeometry(1.4, UNIT_H - 0.08, 1.0),
      slot: new THREE.BoxGeometry(0.7, 0.04, 0.01),
    }),
    [],
  );

  useEffect(
    () => () => Object.values(geometries).forEach((g) => g.dispose()),
    [geometries],
  );

  useFrame((state) => {
    if (!animate) return;
    const t = state.clock.elapsedTime;
    const g = group.current;
    g.position.y = Math.sin(t * 0.8) * 0.08;
    g.rotation.y = -0.6 + Math.sin(t * 0.25) * 0.35 + state.pointer.x * 0.25;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, state.pointer.y * -0.1, 0.05);
  });

  return (
    <group ref={group} rotation={[0, -0.6, 0]}>
      <Outlined geometry={geometries.frame} fill={null} color={GOLD} opacity={0.6} />

      {Array.from({ length: UNITS }, (_, i) => {
        const y = (i - (UNITS - 1) / 2) * UNIT_H;
        return (
          <group key={i}>
            <Outlined geometry={geometries.unit} position={[0, y, 0]} opacity={0.35} />
            <Outlined
              geometry={geometries.slot}
              position={[-0.25, y, 0.51]}
              fill={null}
              opacity={0.25}
            />
          </group>
        );
      })}

      <Leds animate={animate} />
    </group>
  );
}

const AboutScene = () => {
  const wrapper = useRef();
  const [visible, setVisible] = useState(false);
  const [reduceMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  // Only render frames while the section is on screen
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(wrapper.current);
    return () => observer.disconnect();
  }, []);

  const animate = !reduceMotion;
  const { light } = useTheme();
  applyPalette(light);

  return (
    <div ref={wrapper} className="w-full h-full">
      <Canvas
        className="w-full h-full"
        dpr={[1, 1.75]}
        camera={{ position: [2.6, 1.4, 5.4], fov: 45 }}
        frameloop={visible && animate ? "always" : "demand"}
        gl={{ antialias: true, powerPreference: "low-power" }}
      >
        <DragControls minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2.5} />
        {/* Colored lights tint light panels muddy, so light mode uses mostly neutral light */}
        <ambientLight intensity={light ? 1.4 : 0.6} />
        {light && <directionalLight position={[3, 5, 4]} intensity={1.2} />}
        <pointLight position={[3, 3, 4]} intensity={light ? 2 : 12} color="#66FCF1" />
        <pointLight position={[-3, -2, 2]} intensity={light ? 2 : 10} color="#D4AF37" />
        {/* Remount on theme change so every material picks up the new palette */}
        <Rack key={light ? "light" : "dark"} animate={animate} />
      </Canvas>
    </div>
  );
};

export default AboutScene;
