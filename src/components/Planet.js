import React, { useState, useRef } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useFrame, useLoader } from "react-three-fiber";
// import { useSpring, animated, config, easings } from "@react-spring/three";
// import Texture from "../textures/Earth.jpg";
function Planet(props) {
  let Texture = props.texture;
  const myMesh = useRef();
  const texture = useLoader(THREE.TextureLoader, props.texture);

  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime() * props.rotation;
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
