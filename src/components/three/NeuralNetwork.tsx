import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Line, Sphere } from '@react-three/drei';

interface Node {
  position: THREE.Vector3;
  connections: number[];
}

export const NeuralNetwork: React.FC = () => {
  const nodesRef = useRef<THREE.Group>(null);
  
  // Generate network structure
  const { nodes, connections } = useMemo(() => {
    const nodeCount = 30; // Reduced from 50 to decrease visual clutter
    const nodes: Node[] = [];
    const connections: [THREE.Vector3, THREE.Vector3][] = [];

    // Create nodes in a layered structure
    for (let i = 0; i < nodeCount; i++) {
      const layer = Math.floor(i / 6); // Reduced nodes per layer
      const x = (layer - 2) * 4;
      const y = (Math.random() - 0.5) * 8; // Reduced spread
      const z = (Math.random() - 0.5) * 8; // Reduced spread
      
      nodes.push({
        position: new THREE.Vector3(x, y, z),
        connections: []
      });
    }

    // Create fewer connections between nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      const currentLayer = Math.floor(i / 6);
      
      // Connect to next layer with fewer connections
      if (currentLayer < 4) {
        for (let j = 0; j < 2; j++) { // Reduced from 3 to 2 connections
          const targetIndex = Math.floor(Math.random() * 6) + ((currentLayer + 1) * 6);
          if (targetIndex < nodes.length) {
            node.connections.push(targetIndex);
            connections.push([node.position, nodes[targetIndex].position]);
          }
        }
      }
    }

    return { nodes, connections };
  }, []);

  // Animate nodes more slowly
  useFrame((state) => {
    if (nodesRef.current) {
      nodesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05; // Reduced from 0.1
    }
  });

  return (
    <group ref={nodesRef}>
      {/* Nodes */}
      {nodes.map((node, i) => (
        <Sphere key={`node-${i}`} position={[node.position.x, node.position.y, node.position.z]} args={[0.08, 8, 8]}>
          <meshBasicMaterial color="#4F46E5" transparent opacity={0.4} /> {/* Reduced opacity */}
        </Sphere>
      ))}

      {/* Connections */}
      {connections.map(([start, end], i) => (
        <Line
          key={`connection-${i}`}
          points={[start.toArray(), end.toArray()]}
          color="#4F46E5"
          lineWidth={1}
          transparent
          opacity={0.15} // Reduced opacity
        />
      ))}
    </group>
  );
};