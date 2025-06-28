import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

// Optimized Rotating Icosahedron Component
function Icosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Use delta time for consistent animation regardless of framerate
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <icosahedronGeometry args={[2, 0]} />
      <meshBasicMaterial 
        wireframe 
        color="#00f0ff"
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

// Optimized Floating Particles Component
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  // Memoize particle positions to prevent recreation on every render
  const { positions, particleCount } = useMemo(() => {
    const count = 50; // Reduced from 100 for better performance
    const pos = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 15;
    }
    
    return { positions: pos, particleCount: count };
  }, []);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00f0ff"
        transparent
        opacity={0.6}
      />
    </points>
  );
}

// Main Background3D Component
export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        performance={{ min: 0.5 }} // Allow lower performance for better stability
        dpr={[1, 1.5]} // Limit device pixel ratio for better performance
      >
        <color attach="background" args={['#000011']} />
        
        {/* Simplified Lighting */}
        <ambientLight intensity={0.3} />
        
        {/* 3D Elements */}
        <Icosahedron />
        <FloatingParticles />
        <Stars 
          radius={200} 
          depth={40} 
          count={500} // Reduced from 1000
          factor={4} 
          saturation={0} 
          fade 
          speed={0.3} // Reduced speed
        />
        
        {/* Simplified Post-processing Effects */}
        <EffectComposer disableNormalPass>
          <Bloom 
            intensity={1.2} 
            luminanceThreshold={0.9} 
            luminanceSmoothing={0.025}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}