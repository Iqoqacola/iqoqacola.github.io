import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { DragControls } from "./DragControls";
import { useTheme } from "../../useTheme";

const GOLD = new THREE.Color("#D4AF37");
const PLATINUM = new THREE.Color("#C5C6C7");

// Light mode reads like a technical drawing: light nodes, dark outlines, firmer lines
const style = { fill: "#1B1E26", edgeOpacity: 0.18, ringOpacity: 0.08 };

const applyPalette = (light) => {
  GOLD.set(light ? "#876A10" : "#D4AF37");
  PLATINUM.set(light ? "#1F2833" : "#C5C6C7");
  style.fill = light ? "#FFFFFF" : "#1B1E26";
  style.edgeOpacity = light ? 0.35 : 0.18;
  style.ringOpacity = light ? 0.2 : 0.08;
};

// A small web backend, top to bottom: clients -> gateway -> services -> databases.
// Everything is generated here, so the scene ships no model files.
const TIERS = [
  { y: 1.7, count: 5, radius: 2.1, kind: "client" },
  { y: 0.6, count: 2, radius: 0.7, kind: "gateway" },
  { y: -0.5, count: 5, radius: 1.8, kind: "service" },
  { y: -1.6, count: 3, radius: 1.0, kind: "db" },
];
const PACKET_COUNT = 24;

function buildGraph() {
  const nodes = [];
  TIERS.forEach((tier, t) => {
    for (let i = 0; i < tier.count; i++) {
      const a = (i / tier.count) * Math.PI * 2 + t * 0.7;
      nodes.push({
        tier: t,
        kind: tier.kind,
        pos: new THREE.Vector3(
          Math.cos(a) * tier.radius,
          tier.y,
          Math.sin(a) * tier.radius,
        ),
      });
    }
  });

  // Each node links to its nearest nodes in the tier below
  const edges = [];
  nodes.forEach((node, from) => {
    if (node.tier === TIERS.length - 1) return;
    const below = TIERS[node.tier + 1].count;
    const links = Math.max(2, Math.ceil(below / TIERS[node.tier].count));
    nodes
      .map((other, i) => ({ other, i }))
      .filter(({ other }) => other.tier === node.tier + 1)
      .sort((a, b) => a.other.pos.distanceTo(node.pos) - b.other.pos.distanceTo(node.pos))
      .slice(0, links)
      .forEach(({ i }) => edges.push([from, i]));
  });

  const down = nodes.map((_, n) => edges.flatMap((e, i) => (e[0] === n ? [i] : [])));
  const up = nodes.map((_, n) => edges.flatMap((e, i) => (e[1] === n ? [i] : [])));
  return { nodes, edges, down, up };
}

const pick = (list) => list[Math.floor(Math.random() * list.length)];

function NodeMesh({ kind, position }) {
  const { geometry, outline } = useMemo(() => {
    const geometry =
      kind === "db"
        ? new THREE.CylinderGeometry(0.22, 0.22, 0.34, 20)
        : kind === "gateway"
          ? new THREE.OctahedronGeometry(0.26)
          : kind === "client"
            ? new THREE.BoxGeometry(0.36, 0.24, 0.04)
            : new THREE.BoxGeometry(0.26, 0.26, 0.26);
    return { geometry, outline: new THREE.EdgesGeometry(geometry, 30) };
  }, [kind]);

  useEffect(() => () => {
    geometry.dispose();
    outline.dispose();
  }, [geometry, outline]);

  const accent = kind === "gateway" || kind === "db";

  return (
    <group position={position}>
      <mesh geometry={geometry}>
        <meshStandardMaterial color={style.fill} roughness={0.6} metalness={0.2} />
      </mesh>
      <lineSegments geometry={outline}>
        <lineBasicMaterial color={accent ? GOLD : PLATINUM} transparent opacity={accent ? 0.9 : 0.55} />
      </lineSegments>
    </group>
  );
}

function TierRing({ y, radius }) {
  const geometry = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <lineLoop geometry={geometry} position={[0, y, 0]}>
      <lineBasicMaterial color={PLATINUM} transparent opacity={style.ringOpacity} />
    </lineLoop>
  );
}

function Packets({ graph, animate }) {
  const ref = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Requests travel down (gold); once they reach a database they return up as responses (platinum)
  const packets = useMemo(
    () =>
      Array.from({ length: PACKET_COUNT }, () => ({
        edge: Math.floor(Math.random() * graph.edges.length),
        t: Math.random(),
        dir: Math.random() > 0.4 ? 1 : -1,
        speed: 0.35 + Math.random() * 0.35,
      })),
    [graph],
  );

  const place = (p, i) => {
    const [a, b] = graph.edges[p.edge];
    const from = graph.nodes[p.dir > 0 ? a : b].pos;
    const to = graph.nodes[p.dir > 0 ? b : a].pos;
    dummy.position.lerpVectors(from, to, p.t);
    dummy.updateMatrix();
    ref.current.setMatrixAt(i, dummy.matrix);
  };

  useLayoutEffect(() => {
    packets.forEach((p, i) => {
      place(p, i);
      ref.current.setColorAt(i, p.dir > 0 ? GOLD : PLATINUM);
    });
    ref.current.instanceMatrix.needsUpdate = true;
    ref.current.instanceColor.needsUpdate = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [packets]);

  useFrame((_, delta) => {
    if (!animate) return;
    const step = Math.min(delta, 0.05);
    let recolor = false;

    packets.forEach((p, i) => {
      p.t += step * p.speed;
      if (p.t >= 1) {
        const [a, b] = graph.edges[p.edge];
        const at = p.dir > 0 ? b : a;
        let next = p.dir > 0 ? graph.down[at] : graph.up[at];
        if (next.length === 0) {
          // Reached the bottom or the top: turn around
          p.dir *= -1;
          next = p.dir > 0 ? graph.down[at] : graph.up[at];
          ref.current.setColorAt(i, p.dir > 0 ? GOLD : PLATINUM);
          recolor = true;
        }
        p.edge = next.length ? pick(next) : Math.floor(Math.random() * graph.edges.length);
        p.t = 0;
      }
      place(p, i);
    });

    ref.current.instanceMatrix.needsUpdate = true;
    if (recolor) ref.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, PACKET_COUNT]}>
      <sphereGeometry args={[0.045, 10, 10]} />
      <meshBasicMaterial toneMapped={false} />
    </instancedMesh>
  );
}

function SystemGraph({ animate }) {
  const group = useRef();
  const graph = useMemo(buildGraph, []);

  const edgeGeometry = useMemo(() => {
    const points = graph.edges.flatMap(([a, b]) => [graph.nodes[a].pos, graph.nodes[b].pos]);
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [graph]);

  useEffect(() => () => edgeGeometry.dispose(), [edgeGeometry]);

  useFrame((state, delta) => {
    if (!animate) return;
    const g = group.current;
    g.rotation.y += Math.min(delta, 0.05) * 0.12;
    // Lean slightly toward the pointer
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, state.pointer.y * -0.12, 0.04);
    g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, state.pointer.x * -0.06, 0.04);
  });

  return (
    <group ref={group}>
      {TIERS.map((tier) => (
        <TierRing key={tier.kind} y={tier.y} radius={tier.radius + 0.45} />
      ))}

      <lineSegments geometry={edgeGeometry}>
        <lineBasicMaterial color={PLATINUM} transparent opacity={style.edgeOpacity} />
      </lineSegments>

      {graph.nodes.map((node, i) => (
        <NodeMesh key={i} kind={node.kind} position={node.pos} />
      ))}

      <Packets graph={graph} animate={animate} />
    </group>
  );
}

const HeroScene = () => {
  const wrapper = useRef();
  const [visible, setVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReduceMotion(e.matches);
    query.addEventListener("change", onChange);

    // Stop rendering while the hero is scrolled out of view
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(wrapper.current);

    return () => {
      query.removeEventListener("change", onChange);
      observer.disconnect();
    };
  }, []);

  const animate = !reduceMotion;
  const { light } = useTheme();
  applyPalette(light);

  return (
    <div
      ref={wrapper}
      className="h-full w-full"
      role="img"
      aria-label="3D diagram of a web backend: clients, an API gateway, services and databases, with requests flowing between them"
    >
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 2.5, 7.8], fov: 42 }}
        frameloop={visible && animate ? "always" : "demand"}
        gl={{ antialias: true, powerPreference: "low-power" }}
      >
        <DragControls
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI / 2.5}
          target={[0, -0.1, 0]}
        />
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 6, 5]} intensity={1.4} />
        <pointLight position={[-4, -2, 3]} intensity={6} color={GOLD} />
        {/* Remount on theme change so every material picks up the new palette */}
        <SystemGraph key={light ? "light" : "dark"} animate={animate} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
