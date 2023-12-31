import * as THREE from 'three';
import React, { useRef, Suspense, forwardRef } from 'react';
import { Canvas, useFrame, useResource } from 'react-three-fiber';
import { EffectComposer, GodRays } from '@react-three/postprocessing';

function Knot() {
	const knotRef = useRef();

	useFrame(() => {
		knotRef.current.rotation.y += -0.01;
		knotRef.current.rotation.z += -0.01;
	});

	return (
		<mesh ref={knotRef}>
			<torusKnotGeometry args={[4, 0.4, 256, 64, 2, 5]} />
			<meshPhysicalMaterial color={'#FFFFFF'} roughness={0} metalness={0} clearcoat={1} />
		</mesh>
	);
}

const Sun = forwardRef(function Sun(props, forwardRef) {
	useFrame(({ clock }) => {
		forwardRef.current.position.x = Math.sin(clock.getElapsedTime()) * -8;
		forwardRef.current.position.y = Math.cos(clock.getElapsedTime()) * -8;
	});

	return (
		<mesh ref={forwardRef} position={[0, 0, -15]}>
			<sphereGeometry args={[1, 36, 36]} />
			<meshBasicMaterial color={'#00FF00'} />
		</mesh>
	);
});

function Effects() {
	const sunRef = useResource();
	return (
		<>
			<Sun ref={sunRef} />
			{sunRef.current && (
				<EffectComposer multisampling={0}>
					<GodRays
						sun={sunRef.current}
						samples={30}
						density={0.97}
						decay={0.96}
						weight={0.6}
						exposure={0.4}
						clampMax={1}
						blur={true}
					/>
				</EffectComposer>
			)}
		</>
	);
}

export default function GodR() {
	return (
		<Canvas
			onCreated={({ gl }) => {
				gl.setClearColor(new THREE.Color('#000000'));
			}}
		>
			<pointLight position={[15, 15, 15]} intensity={1} />
			<Suspense fallback={null}>
				<Knot />
			</Suspense>
			<Effects />
		</Canvas>
	);
}
