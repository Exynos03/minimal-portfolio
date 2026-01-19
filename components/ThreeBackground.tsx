"use client";
import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Starfield() {
    const ref = useRef<THREE.Points>(null!);
    const count = 4000;

    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Spread stars in a wide cylinder to simulate travel tunnel
            positions[i * 3] = (Math.random() - 0.5) * 40; // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 40; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 40; // z
        }
        return positions;
    }, [count]);

    useFrame((state, delta) => {
        if (!ref.current) return;

        // Move stars towards camera to simulate speed
        const positionsArray = ref.current.geometry.attributes.position.array as Float32Array;
        const speed = 5 * delta;

        for (let i = 0; i < count; i++) {
            positionsArray[i * 3 + 2] += speed;

            // Reset if too close (behind camera)
            if (positionsArray[i * 3 + 2] > 5) {
                positionsArray[i * 3 + 2] = -35;
                positionsArray[i * 3] = (Math.random() - 0.5) * 40;
                positionsArray[i * 3 + 1] = (Math.random() - 0.5) * 40;
            }
        }
        ref.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#ffffff"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.8}
            />
        </Points>
    );
}

function UFO() {
    const groupRef = useRef<THREE.Group>(null!);
    const { viewport, clock } = useThree();

    // State for random movement
    const [target, setTarget] = useState(new THREE.Vector3(0, 0, 0));

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        const time = state.clock.getElapsedTime();

        // Check if close to target, then pick new random target
        if (groupRef.current.position.distanceTo(target) < 1) {
            setTarget(new THREE.Vector3(
                (Math.random() - 0.5) * (viewport.width * 0.8),
                (Math.random() - 0.5) * (viewport.height * 0.8),
                (Math.random() - 0.5) * 4
            ));
        }

        // Smoothly move towards target
        const speed = 2.5 * delta;
        const direction = new THREE.Vector3().subVectors(target, groupRef.current.position).normalize();

        groupRef.current.position.add(direction.multiplyScalar(speed));

        // Subtle, ominous bobbing
        groupRef.current.position.y += Math.sin(time * 1.5) * 0.003;

        // Complex Rotation
        groupRef.current.rotation.y += delta * 0.5;

        // Banking logic
        const tiltX = direction.y * 0.3;
        const tiltZ = -direction.x * 0.3;

        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, tiltX, 0.05);
        groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, tiltZ, 0.05);
    });

    return (
        <group ref={groupRef} scale={[0.3, 0.3, 0.3]}> {/* Smaller Scale */}

            {/* --- REALISTIC HULL --- */}

            {/* Main Saucer - Metallic Silver */}
            <mesh scale={[1.5, 0.25, 1.5]}>
                <sphereGeometry args={[1, 64, 64]} /> {/* Higher poly for smooth reflections */}
                <meshStandardMaterial
                    color="#b0b0b0"
                    metalness={1.0}
                    roughness={0.15}
                    envMapIntensity={1}
                />
            </mesh>

            {/* Central Dome - Dark Glass */}
            <mesh position={[0, 0.15, 0]}>
                <sphereGeometry args={[0.6, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
                <meshPhysicalMaterial
                    color="#000000"
                    metalness={0.9}
                    roughness={0}
                    transmission={0.2} // Slight transparency
                    thickness={0.5}
                    clearcoat={1}
                />
            </mesh>

            {/* Engine Ring - Glowing Plasma Blue */}
            <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.48, 0.02, 16, 100]} />
                <meshStandardMaterial
                    color="#0088ff"
                    emissive="#0088ff"
                    emissiveIntensity={4}
                    toneMapped={false}
                />
            </mesh>

            {/* Bottom Thruster - Hot White/Blue Center */}
            <mesh position={[0, -0.2, 0]}>
                <cylinderGeometry args={[0.2, 0.05, 0.1, 32]} />
                <meshStandardMaterial
                    color="#ffffff"
                    emissive="#ffffff"
                    emissiveIntensity={5}
                />
            </mesh>

            {/* Dynamic Light Source from Thruster */}
            <pointLight position={[0, -0.5, 0]} color="#0088ff" intensity={3} distance={4} decay={2} />

        </group>
    )
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 z-[-1] bg-black">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: false, powerPreference: "high-performance" }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Starfield />
                <UFO />
            </Canvas>
        </div>
    );
}
