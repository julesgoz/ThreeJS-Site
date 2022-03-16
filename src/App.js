import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
// import { Physics } from "@react-three/cannon";
import Planet from "./components/Planet";
import "./App.css";

const planetData = [
  {
    Name: "Sun",
    Texture: "/textures/Sun.jpg",
    Diameter: 4879,
    PropToEarth: 104.2074318,
    Placement: -10,
    Rotation: 0.01,
    key: Math.random(),
  },
  {
    Name: "Mercury",
    Texture: "/textures/Mercury.jpg",
    Diameter: 4879,
    PropToEarth: 0.38249,
    Placement: -2,
    Rotation: 0.000688,
    key: Math.random(),
  },
  {
    Name: "Venus",
    Texture: "/textures/Venus.jpg",
    Diameter: 12104,
    PropToEarth: 0.948887,
    Placement: -1,
    Rotation: 0.000414,
    key: Math.random(),
  },
  {
    Name: "Earth",
    Texture: "/textures/Earth.jpg",
    Diameter: 12756,
    PropToEarth: 1,
    Placement: 0,
    Rotation: 0.1,
    key: Math.random(),
  },
  {
    Name: "Moon",
    Texture: "/textures/Moon.jpg",
    Diameter: 3475,
    PropToEarth: 0.272421,
    Placement: 0.25,
    Rotation: 0.01,
    key: Math.random(),
  },
  {
    Name: "Mars",
    Texture: "/textures/Mars.jpg",
    Diameter: 6792,
    PropToEarth: 0.532455,
    Placement: 2,
    Rotation: 0.055,
    key: Math.random(),
  },
  {
    Name: "Jupiter",
    Texture: "/textures/Jupiter.jpg",
    Diameter: 142984,
    PropToEarth: 11.20916,
    Placement: 3,
    Rotation: 2.89,
    key: Math.random(),
  },
  {
    Name: "Saturn",
    Texture: "/textures/Saturn.jpg",
    Diameter: 120536,
    PropToEarth: 9.449357,
    Placement: 4.25,
    Rotation: 2.34,
    key: Math.random(),
  },
  {
    Name: "Uranus",
    Texture: "/textures/Uranus.jpg",
    Diameter: 5118,
    PropToEarth: 0.401223,
    Placement: 5,
    Rotation: 0.94,
    key: Math.random(),
  },
  {
    Name: "Neptune",
    Texture: "/textures/Neptune.jpg",
    Diameter: 49528,
    PropToEarth: 3.882722,
    Placement: 6,
    Rotation: 0.61,
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
        rotation={planet.Rotation}
      />
    );
  });

  return (
    <div className="Main">
      <h2>Zoom Out</h2>
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          <Stars
            radius={500}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
          />
          <ambientLight intensity={0.5} />
          {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
          <spotLight position={[-200, 0, 0]} angle={0.3} />
          {Planets}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
