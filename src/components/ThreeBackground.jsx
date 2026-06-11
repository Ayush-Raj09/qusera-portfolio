import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// A single floating shape component
const FloatingShape = ({ geometry, color, position, scale, speed, rotationSpeed }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Auto-rotation
    meshRef.current.rotation.x += rotationSpeed[0] * 0.005;
    meshRef.current.rotation.y += rotationSpeed[1] * 0.005;
    meshRef.current.rotation.z += rotationSpeed[2] * 0.005;
    
    // Float movement
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(time * speed + position[0]) * 0.2;
  });

  return (
    <Float speed={speed * 1.5} rotationIntensity={1} floatIntensity={1}>
      <mesh
        ref={meshRef}
        position={position}
        scale={scale}
        castShadow
        receiveShadow
      >
        {geometry}
        <meshPhysicalMaterial
          color={color}
          roughness={0.15}
          metalness={0.9}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          transmission={0.4} // Glass-like look
          thickness={1.5}
          ior={1.5}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
};

// Scene interactive controller that listens to mouse movement
const SceneController = () => {
  const { camera, pointer } = useThree();
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame(() => {
    // Smoothly rotate the camera based on pointer coordinates
    targetRotation.current.x = THREE.MathUtils.lerp(targetRotation.current.x, pointer.x * 0.3, 0.05);
    targetRotation.current.y = THREE.MathUtils.lerp(targetRotation.current.y, pointer.y * 0.3, 0.05);
    
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 2, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 2 + 1, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

// Particles component
const Particles = ({ count = 60 }) => {
  const pointsRef = useRef();
  const particles = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.02;
    pointsRef.current.rotation.x = time * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#FFB800"
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  );
};

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-white pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 10, 5]} intensity={2.5} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={1.5} color="#FFB800" />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#000000" />
        
        {/* Floating Abstract Shapes */}
        <FloatingShape
          geometry={<torusGeometry args={[1, 0.35, 16, 64]} />}
          color="#000000"
          position={[-3, 1.5, -1]}
          scale={0.7}
          speed={0.8}
          rotationSpeed={[1, 2, 0.5]}
        />
        
        <FloatingShape
          geometry={<icosahedronGeometry args={[1, 0]} />}
          color="#FFB800"
          position={[3.5, 2, 0]}
          scale={0.8}
          speed={1.1}
          rotationSpeed={[2, 0.5, 1.5]}
        />
        
        <FloatingShape
          geometry={<boxGeometry args={[1, 1, 1]} />}
          color="#666666"
          position={[-2.5, -2, 1]}
          scale={0.6}
          speed={0.7}
          rotationSpeed={[0.5, 1, 2]}
        />

        <FloatingShape
          geometry={<coneGeometry args={[0.8, 1.6, 4]} />}
          color="#FFB800"
          position={[2.5, -1.8, -1.5]}
          scale={0.65}
          speed={0.9}
          rotationSpeed={[1.5, 1, 0.5]}
        />
        
        <FloatingShape
          geometry={<sphereGeometry args={[0.8, 32, 32]} />}
          color="#111111"
          position={[0, 2.5, -2]}
          scale={0.5}
          speed={0.6}
          rotationSpeed={[0.2, 0.5, 0.8]}
        />

        <Particles count={70} />
        <SceneController />
      </Canvas>
    </div>
  );
}
