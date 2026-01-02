import * as THREE from "three";

const HeartMesh = () => {
  const heartShape = new THREE.Shape();

  // ❤️ Upright, clean heart (FLIPPED vertically)
  heartShape.moveTo(0, -1);
  heartShape.bezierCurveTo(0, -1, -1.5, -0.2, -1.5, 0.8);
  heartShape.bezierCurveTo(-1.5, 2, 0, 2.4, 0, 1.2);
  heartShape.bezierCurveTo(0, 2.4, 1.5, 2, 1.5, 0.8);
  heartShape.bezierCurveTo(1.5, -0.2, 0, -1, 0, -1);

  const geometry = new THREE.ExtrudeGeometry(heartShape, {
    depth: 0.45,              // ✅ thinner (no block)
    bevelEnabled: true,
    bevelThickness: 0.35,
    bevelSize: 0.35,
    bevelSegments: 20,
    curveSegments: 40,
  });

  geometry.center(); // 🔥 VERY IMPORTANT (fixes cropping)

  return (
    <mesh scale={1.90}>
      <meshPhysicalMaterial
        color="#E11D48"        // ❤️ ROSE RED (your primary)
        metalness={0.55}
        roughness={0.12}
        clearcoat={1}
        clearcoatRoughness={0.05}
        reflectivity={1}
      />
      <primitive object={geometry} attach="geometry" />
    </mesh>
  );
};

export default HeartMesh;