import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text3D, Center, Float, PerspectiveCamera, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Scene() {
  const { mouse } = useThree();
  const studioRef = useRef<THREE.Group>(null);
  const kaliRef = useRef<THREE.Group>(null);

  // Constants for materials
  const hotPink = '#ff2d78';
  const electricCyan = '#00e5ff';

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Mouse interaction - subtle tilt
    if (studioRef.current) {
      studioRef.current.rotation.y = THREE.MathUtils.lerp(studioRef.current.rotation.y, (mouse.x * Math.PI) / 10, 0.1);
      studioRef.current.rotation.x = THREE.MathUtils.lerp(studioRef.current.rotation.x, -(mouse.y * Math.PI) / 10, 0.1);
    }
    
    if (kaliRef.current) {
      kaliRef.current.rotation.y = THREE.MathUtils.lerp(kaliRef.current.rotation.y, (mouse.x * Math.PI) / 8, 0.1);
      kaliRef.current.rotation.x = THREE.MathUtils.lerp(kaliRef.current.rotation.x, -(mouse.y * Math.PI) / 8, 0.1);
      
      // Subtle float movement
      kaliRef.current.position.y = Math.sin(t) * 0.1;
    }
  });

  // Font URL - using a local path for production stability
  const fontUrl = '/fonts/helvetiker_bold.typeface.json';

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color={electricCyan} />
      <pointLight position={[-10, 5, 10]} intensity={1.5} color={hotPink} />
      <spotLight position={[0, 5, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />

      <Center top position={[0, 1.2, 0]}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <group ref={studioRef}>
            <Text3D
              font={fontUrl}
              size={0.6}
              height={0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              STUDIO
              <meshStandardMaterial color="#f0ede5" metalness={0.8} roughness={0.2} />
            </Text3D>
          </group>
        </Float>
      </Center>

      <Center bottom position={[0, -0.2, 0]}>
        <Float speed={3} rotationIntensity={1} floatIntensity={1}>
          <group ref={kaliRef}>
            <Text3D
              font={fontUrl}
              size={1.4}
              height={0.1}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.05}
              bevelSize={0.03}
              bevelOffset={0}
              bevelSegments={5}
            >
              KALI
              <MeshDistortMaterial
                color={hotPink}
                speed={2}
                distort={0.2}
                radius={1}
                emissive={hotPink}
                emissiveIntensity={2}
                wireframe={true}
              />
            </Text3D>
          </group>
        </Float>
      </Center>
    </>
  );
}

export default function Logo3D() {
  return (
    <div className="w-full h-[60vh] md:h-[80vh] relative z-20 cursor-grab active:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <Scene />
      </Canvas>
    </div>
  );
}
