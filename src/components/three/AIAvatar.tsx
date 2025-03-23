import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Text } from '@react-three/drei';

interface EnergyParticlesProps {
  count: number;
  radius: number;
}

const EnergyParticles: React.FC<EnergyParticlesProps> = ({ count, radius }) => {
  const particlesRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      temp.set([x, y, z], i * 3);
    }
    return temp;
  }, [count, radius]);

  useFrame((state) => {
    if (!particlesRef.current) return;
    const time = state.clock.getElapsedTime();
    
    particlesRef.current.rotation.y = time * 0.2;
    particlesRef.current.rotation.z = time * 0.1;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={new THREE.Color(0.3, 0.8, 1)}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

export const AIAvatar: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current || !ringRef.current) return;
    const time = state.clock.getElapsedTime();

    groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
    ringRef.current.rotation.z = time * 0.5;
  });

  return (
    <group ref={groupRef} position={[-5, 0, 0]}>
      {/* Central orb */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial 
          color={new THREE.Color(0.3, 0.8, 1)}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Rotating ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[0.8, 0.05, 16, 100]} />
        <meshBasicMaterial 
          color={new THREE.Color(0.3, 0.8, 1)}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* AI Status text */}
      <Text
        position={[0, -1, 0]}
        fontSize={0.2}
        color="#80bfff"
        anchorX="center"
        anchorY="top"
      >
        AI ASSISTANT
      </Text>

      {/* Energy particles */}
      <EnergyParticles count={20} radius={1} />
    </group>
  );
};