import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Suspense } from "react";
import { rotate } from "three/tsl";

function Model() {
  const { scene } = useGLTF("/models/lumen_vgs_pack.glb");

  return (
    <primitive
      object={scene}
      scale={0.75}
      position={[0.75, -0.5, 0]}
      rotation={[0, 0.85, 0]}
    />
  );
}

const HeroScene = () => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 7], fov: 50 }}>
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
        <Model />
      </Suspense>

      <ContactShadows
        opacity={0.5}
        scale={10}
        blur={1}
        far={10}
        resolution={256}
        color="#000000"
      />
    </Canvas>
  );
};

useGLTF.preload("/models/avatar.glb");

export default HeroScene;
