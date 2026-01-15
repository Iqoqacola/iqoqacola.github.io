import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  PerspectiveCamera,
  Environment,
  Stars,
} from "@react-three/drei";
import { useRef } from "react";

function MainCrystal() {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.y -= delta * 0.4;
    mesh.current.rotation.x -= delta * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={mesh} position={[0, 0, 0]}>
        {/* Inti Kristal */}
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#D4AF37"
          roughness={0.1}
          metalness={0.9}
          emissive="#D4AF37"
          emissiveIntensity={0.1}
        />

        {/* Wireframe Luar */}
        <mesh scale={[1.2, 1.2, 1.2]}>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial
            color="#66FCF1"
            wireframe={true}
            transparent
            opacity={0.3}
          />
        </mesh>
      </mesh>
    </Float>
  );
}

const HeroScene = () => {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#66FCF1" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#D4AF37" />

      <MainCrystal />

      <Stars
        radius={50}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Environment preset="city" />
    </Canvas>
  );
};

export default HeroScene;
