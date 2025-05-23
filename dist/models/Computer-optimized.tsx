/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 computer-optimized.glb -T -t 
Files: computer-optimized.glb [486.38KB] > D:\Desktop\Portfolio\public\models\computer-optimized-transformed.glb [39.72KB] (92%)
*/

import * as THREE from 'three'
import React, { JSX } from 'react'
import { useGLTF } from '@react-three/drei'
import { type GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube000_ComputerDesk_0001_1: THREE.Mesh
    Cube000_ComputerDesk_0001_2: THREE.Mesh
  }
  materials: {
    ['ComputerDesk.001']: THREE.MeshStandardMaterial
    ['FloppyDisk.001']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Computer(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/computer-optimized-transformed.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh geometry={nodes.Cube000_ComputerDesk_0001_1.geometry} material={materials['ComputerDesk.001']} />
        <mesh geometry={nodes.Cube000_ComputerDesk_0001_2.geometry} material={materials['FloppyDisk.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/computer-optimized-transformed.glb')
