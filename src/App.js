import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Planet from "./components/Planet";
import textureAssets from "./textures/assets";
import "./App.css";

const planetData = [
  {
    Name: "Sun",
    Texture: textureAssets.earthTexture,
    Diameter: 4879,
    PropToEarth: 104.2074318,
    Placement: -20,
    key: Math.random(),
  },
  {
    Name: "Mercury",
    Texture: textureAssets.earthTexture,
    Diameter: 4879,
    PropToEarth: 0.38249,
    Placement: 0,
    key: Math.random(),
  },
  {
    Name: "Venus",
    Texture: textureAssets.earthTexture,
    Diameter: 12104,
    PropToEarth: 0.948887,
    Placement: 1,
    key: Math.random(),
  },
  {
    Name: "Earth",
    Texture: textureAssets.earthTexture,
    Diameter: 12756,
    PropToEarth: 1,
    Placement: 2,
    key: Math.random(),
  },
  {
    Name: "Moon",
    Texture: textureAssets.earthTexture,
    Diameter: 3475,
    PropToEarth: 0.272421,
    Placement: 3,
    key: Math.random(),
  },
  {
    Name: "Mars",
    Texture: textureAssets.earthTexture,
    Diameter: 6792,
    PropToEarth: 0.532455,
    Placement: 4,
    key: Math.random(),
  },
  {
    Name: "Jupiter",
    Texture: textureAssets.earthTexture,
    Diameter: 142984,
    PropToEarth: 11.20916,
    Placement: 5,
    key: Math.random(),
  },
  {
    Name: "Saturn",
    Texture: textureAssets.earthTexture,
    Diameter: 120536,
    PropToEarth: 9.449357,
    Placement: 6,
    key: Math.random(),
  },
  {
    Name: "Uranus",
    Texture: textureAssets.earthTexture,
    Diameter: 5118,
    PropToEarth: 0.401223,
    Placement: 7,
    key: Math.random(),
  },
  {
    Name: "Neptune",
    Texture: textureAssets.earthTexture,
    Diameter: 49528,
    PropToEarth: 3.882722,
    Placement: 8,
    key: Math.random(),
  },
  {
    Name: "Pluto",
    Texture: textureAssets.earthTexture,
    Diameter: 2376,
    PropToEarth: 0.186265,
    Placement: 9,
    key: Math.random(),
  },
];

const App = () => {
  const Planets = planetData.map((planet) => {
    return (
      <Planet
        position={[20 * planet.Placement, 0, 0]}
        size={planet.PropToEarth}
        name={planet.Name}
        texture={planet.Texture}
        key={planet.key}
      />
    );
  });

  return (
    <div className="Main">
      <h2>Hello</h2>
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          {/* <Stars /> */}
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          {Planets}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
