import React from "react";
import useMouse from "../hooks/UseMouse";
import { motion } from "framer-motion-3d";
import { useMotionValue, useTransform } from "framer-motion";
import { useThree } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";

export default function Model() {
  const mouse = useMouse();
  const { viewport } = useThree();
  const smoothMouse = { x: useMotionValue(0), y: useMotionValue(0) };
  const lerp = (x, y, a) => {
    return x * (1 - a) + y * a;
  };
  useFrame(() => {
    const { x, y } = mouse;
    smoothMouse.x.set(lerp(smoothMouse.x.get(), x.get(), 0.1));
    smoothMouse.y.set(lerp(smoothMouse.y.get(), y.get(), 0.1));
  });

  const x = useTransform(
    smoothMouse.x,
    [0, window.innerWidth],
    [(-1 * viewport.width) / 2, viewport.width / 2]
  );
  const y = useTransform(
    smoothMouse.y,
    [0, window.innerHeight],
    [viewport.height / 2, (-1 * viewport.width) / 2]
  );
  return (
    <>
      {/* <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[0, 0, 0]} /> */}
      <motion.mesh position-x={x} position-y={y}>
        <planeGeometry args={[2, 3, 15, 15]} />
        <meshBasicMaterial color={"green"} wireframe />
      </motion.mesh>
    </>
  );
}
