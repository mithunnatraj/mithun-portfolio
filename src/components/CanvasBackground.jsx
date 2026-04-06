import { Canvas } from '@react-three/fiber';

export default function CanvasBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="bg-transparent" dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
}
