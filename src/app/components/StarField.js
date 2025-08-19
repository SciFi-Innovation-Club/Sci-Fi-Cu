'use client';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Suspense } from 'react';

function StarFieldCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1}
        />
      </Suspense>
    </Canvas>
  );
}

export default function StarField() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      opacity: 0.6
    }}>
      <StarFieldCanvas />
    </div>
  );
}