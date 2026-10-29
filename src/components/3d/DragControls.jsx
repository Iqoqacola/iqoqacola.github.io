import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Drag-to-rotate like drei's OrbitControls (no zoom, no pan), without pulling in drei
export const DragControls = ({ minPolarAngle, maxPolarAngle, target = [0, 0, 0] }) => {
  const { camera, gl, invalidate } = useThree();
  const controls = useRef();

  useEffect(() => {
    const c = new OrbitControls(camera, gl.domElement);
    c.enableZoom = false;
    c.enablePan = false;
    c.enableDamping = true;
    c.minPolarAngle = minPolarAngle;
    c.maxPolarAngle = maxPolarAngle;
    c.target.set(...target);
    c.update();
    c.addEventListener("change", invalidate);
    controls.current = c;
    return () => {
      c.removeEventListener("change", invalidate);
      c.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camera, gl, invalidate, minPolarAngle, maxPolarAngle]);

  useFrame(() => controls.current?.update());

  return null;
};
