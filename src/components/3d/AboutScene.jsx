import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
  Float,
} from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("/models/iron_man.glb");

  return (
    <primitive
      object={scene}
      scale={0.25}
      position={[0, -295, 0]}
      rotation={[0, -0.75, 0]}
    />
  );
}

const AboutScene = () => {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 750, 0], fov: 50 }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#66FCF1" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#D4AF37" />

      <Environment preset="city" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
      />

      <Suspense fallback={null}>
        <Float
          speed={2}
          rotationIntensity={1}
          floatIntensity={1}
          floatingRange={[-10, 10]}
        >
          <Model />
        </Float>
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

useGLTF.preload("/models/iron_man.glb");

export default AboutScene;
