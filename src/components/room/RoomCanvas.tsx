"use client";

import { Canvas, extend, type ThreeElement, type ThreeElements, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/addons'

import { useUIStore } from "@/lib/store";
extend({OrbitControls})

declare module '@react-three/fiber' {
  interface ThreeElements {
    orbitControls: ThreeElement<typeof OrbitControls>
  }
}


export function RoomCanvas() {
  const { mode } = useUIStore();
  const [ orthographic, setOrthographic ] = useState(false);

  useEffect(() => {
    setOrthographic(mode === "2D")
    console.log(`we are in ${mode} mode`)
    console.log("and orthographic view is", orthographic)
  }, [mode, orthographic, setOrthographic])

  return(
    <Canvas orthographic={orthographic}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI * 1.5} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      
      <Controls />
      <Room position={[0,0,0]} />
    </Canvas>
  )
}

function Controls() {
  const { camera, gl } = useThree();
  const isOrthographic = useThree(state => state.camera instanceof THREE.OrthographicCamera)

  return isOrthographic ? (
    <></>
  ) : (
    <orbitControls args={[camera, gl.domElement]} />
  )
}

function Room(props: ThreeElements["mesh"]) {
  const { currentRoom: {width, depth} } = useUIStore();
  // This reference will give us direct access to the mesh
  const meshRef = useRef<THREE.Mesh>(null!)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((_, delta) => {meshRef.current.rotation.x += delta})
  // Return view, these are regular three.js elements expressed in JSX
  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: Allow
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
