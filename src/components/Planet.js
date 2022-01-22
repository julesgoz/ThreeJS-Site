import React, { useState, useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { useSpring, animated, config, easings } from "@react-spring/three";
import Texture from "../textures/Earth.jpg";
function Planet(props) {
  const myMesh = useRef();
  const [texture] = useTexture([Texture]);
  const [active, setActive] = useState(false);

  //   const [color, setColor] = useState("green");

  //   const { scale } = useSpring({
  //     config: { duration: 750, easing: easings.easeInOutQuart },
  //     loop: true,
  //     from: { scale: 1 },
  //     to: [{ scale: 1.5 }, { scale: 1 }],
  //   });

  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  function planetClickHandler() {
    setActive((prev) => !prev);
  }

  return (
    <mesh
      scale={props.size}
      position={props.position}
      ref={myMesh}
      onClick={planetClickHandler}
    >
      <sphereGeometry />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Planet;
