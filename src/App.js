import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import "./App.css";

const App = () => {
  return (
    <div className="Main">
      <h2>Hello</h2>
      <button onClick={addCubes}>Add More Cubes</button>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <Physics></Physics>
      </Canvas>
    </div>
  );
};

export default App;
