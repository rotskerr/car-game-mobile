import { useGLTF } from "@react-three/drei";
import React from "react";

export function Airplane(props) {
  const { scene } = useGLTF("./models/airplane/untitled.glb", true);

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} rotation={[0, Math.PI / 2, 0]} position={[1.09, -4.23, 5]} scale={2} />
    </group>
  );
}

useGLTF.preload("./models/airplane/untitled.glb");
