/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import React, { useEffect } from 'react'
import * as THREE from 'three';

type iconProps = {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
}

const TechIcon = ({ model }: { model: iconProps }) => {
  const scene = useGLTF(model.modelPath);
  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          if (child.name === "Object_5") {
            (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [scene]);

  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset='city' />
      <OrbitControls enableZoom={false} />
      <Float speed={5.5} rotationIntensity={2} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon