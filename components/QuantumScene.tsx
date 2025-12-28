
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Extend JSX.IntrinsicElements to include Three.js elements used in this file
// We augment the 'react' module's JSX namespace to fix "Property does not exist" errors
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
    }
  }
}

const CinematicDust = () => {
  const count = 100; // Reduced count
  const radius = 25;
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * radius * 1.5;
      const y = (Math.random() - 0.5) * radius * 1.2;
      const z = (Math.random() - 0.5) * radius * 0.8 + 2; 
      
      temp.push(new THREE.Vector3(x, y, z));
    }
    return temp;
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Very slow, ambient rotation
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.02;
    }
  });

  const dustGeo = useMemo(() => new THREE.SphereGeometry(0.025, 4, 4), []);
  const dustMat = useMemo(() => new THREE.MeshBasicMaterial({ 
    color: "#ffffff", 
    transparent: true, 
    opacity: 0.3 // Reduced opacity
  }), []);

  return (
    <group ref={groupRef}>
      {particles.map((pos, i) => (
        <Float key={i} speed={0.2 + Math.random() * 0.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh 
            position={[pos.x, pos.y, pos.z]} 
            geometry={dustGeo} 
            material={dustMat} 
          />
        </Float>
      ))}
    </group>
  );
};

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }} dpr={[1, 2]}>
        <Float speed={0.2}>
          <CinematicDust />
        </Float>
      </Canvas>
    </div>
  );
};
