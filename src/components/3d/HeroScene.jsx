import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
  Float,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

function Model({ isMobile }) {
  const { scene } = useGLTF("/models/Laptop.glb");

  const scale = isMobile ? 0.08 : 0.1;

  return (
    <primitive
      object={scene}
      scale={scale}
      position={[0, -1.5, 0]}
      rotation={[0, -0.55, 0]}
    />
  );
}

const HeroScene = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Canvas
      className="w-full h-full"
      dpr={[1, 2]}
      camera={{ position: [0, 0, isMobile ? 30 : 25], fov: 50 }}
    >
      {/* Pencahayaan */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#66FCF1" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#D4AF37" />

      <Environment preset="city" />

      {/* Kontrol Interaksi */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI / 2.5}
      />

      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Model isMobile={isMobile} />
        </Float>
      </Suspense>

      <ContactShadows
        position={[0, -4, 0]}
        opacity={0.4}
        scale={20}
        blur={2}
        far={10}
        resolution={256}
        color="#000000"
      />
    </Canvas>
  );
};

useGLTF.preload("/models/Laptop.glb");

export default HeroScene;
