import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HeartMesh from "./heartMesh";

const HeartScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 50 }}
      className="w-full h-full"
    >
      {/* Soft romantic lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 6]} intensity={1.3} />
      <pointLight position={[-4, -4, 4]} intensity={0.9} color="#FADADD" />

      <HeartMesh />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.4}     // 🔥 slower, calmer
      />
    </Canvas>
  );
};

export default HeartScene;