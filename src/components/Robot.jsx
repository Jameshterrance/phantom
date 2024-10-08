/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 phantoms.glb --transform 
Files: phantoms.glb [6.41MB] > C:\Users\ASUS\Desktop\final projects\Gsap Final\gspa-app\public\models\phantoms-transformed.glb [192.52KB] (97%)
*/

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export function Robot(props) {
  const { nodes, materials } = useGLTF("../models/phantoms-transformed.glb");
  const robot = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    tl.current
      .to(robot.current.rotation, { y: -1 }, 2)
      .to(robot.current.position, { x: 1 }, 2)

      .to(robot.current.rotation, { y: 1 }, 6)
      .to(robot.current.position, { x: -1 }, 6)

      .to(robot.current.rotation, { y: 0 }, 11)
      .to(robot.current.rotation, { x: 1 }, 11)
      .to(robot.current.position, { x: 0 }, 11)

      .to(robot.current.rotation, { y: 0 }, 13)
      .to(robot.current.rotation, { x: -1 }, 13)
      .to(robot.current.position, { x: 0 }, 13)

      .to(robot.current.rotation, { y: 0 }, 16)
      .to(robot.current.rotation, { x: 0 }, 16)
      .to(robot.current.position, { x: 0 }, 16)

      .to(robot.current.rotation, { y: 0 }, 20)
      .to(robot.current.rotation, { x: 0 }, 20)
      .to(robot.current.position, { x: 0 }, 20);
  }, []);

  return (
    <group {...props} dispose={null} ref={robot}>
      {/* <mesh
        geometry={nodes.Cylindre005.geometry}
        material={nodes.Cylindre005.material}
        position={[-0.017, 2.754, -0.066]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.582}
      /> */}
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials.Metal}
        position={[-0.214, 0.163, 0.365]}
        rotation={[0, -0.152, 0]}
        scale={0.146}
        castShadow
      >
        <meshPhysicalMaterial
          color='#555'
          roughness={0.2}
          metalness={1}
          reflectivity={0.5}
          iridescence={0.3}
          iridescenceIOR={1}
          iridescenceThicknessRange={[100, 1000]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("../models/phantoms-transformed.glb");
