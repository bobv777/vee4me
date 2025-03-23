import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Text } from '@react-three/drei';

interface HolographicPanelProps {
  position: [number, number, number];
  rotation: [number, number, number];
  width: number;
  height: number;
  title: string;
}

const HolographicPanel: React.FC<HolographicPanelProps> = ({
  position,
  rotation,
  width,
  height,
  title
}) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.time.value = state.clock.getElapsedTime();
  });

  const shader = {
    uniforms: {
      time: { value: 0 },
      color: { value: new THREE.Color(0.3, 0.8, 1) }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color;
      varying vec2 vUv;
      
      void main() {
        float grid = abs(sin(vUv.x * 50.0)) * abs(sin(vUv.y * 50.0));
        float pulse = abs(sin(time + vUv.y * 5.0));
        vec3 finalColor = color * (grid * 0.5 + 0.5) * (pulse * 0.3 + 0.7);
        gl_FragColor = vec4(finalColor, 0.5);
      }
    `
  };

  return (
    <group position={position} rotation={rotation}>
      {/* Panel background */}
      <mesh>
        <planeGeometry args={[width, height]} />
        <shaderMaterial 
          ref={materialRef}
          {...shader}
          transparent
          depthWrite={false}
        />
      </mesh>

      {/* Title */}
      <Text
        position={[0, height/2 + 0.2, 0]}
        fontSize={0.15}
        color="#80bfff"
        anchorX="center"
        anchorY="bottom"
      >
        {title}
      </Text>

      {/* Decorative elements */}
      <group position={[0, 0, 0.01]}>
        {Array.from({ length: 3 }).map((_, i) => (
          <mesh key={i} position={[(i - 1) * width/3, 0, 0]}>
            <circleGeometry args={[0.05, 32]} />
            <meshBasicMaterial color="#80bfff" transparent opacity={0.8} />
          </mesh>
        ))}
      </group>
    </group>
  );
};

export const HolographicInterface: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    
    groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;
    groupRef.current.position.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <group ref={groupRef} position={[5, 0, 0]}>
      {/* Holographic panels */}
      <HolographicPanel 
        position={[0, 2, 0]} 
        rotation={[0, -Math.PI * 0.1, 0]}
        width={2}
        height={1}
        title="Neural Activity"
      />
      
      <HolographicPanel 
        position={[0.5, 0, 0]} 
        rotation={[0, -Math.PI * 0.15, 0]}
        width={1.5}
        height={1.5}
        title="Data Flow"
      />
      
      <HolographicPanel 
        position={[-0.5, -2, 0]} 
        rotation={[0, -Math.PI * 0.05, 0]}
        width={2}
        height={1}
        title="System Status"
      />
    </group>
  );
};