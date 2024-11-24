import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "../models/Model";
import "./Scene.css";
export default function () {
  return (
    <div className="main_div">
      <Canvas>
        <Model />
      </Canvas>
    </div>
  );
}
