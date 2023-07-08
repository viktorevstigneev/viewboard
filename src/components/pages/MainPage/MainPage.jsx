import './style.css';
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useLoader, useThree, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Physics, usePlane, useBox, useSphere } from '@react-three/cannon';
import { Vector3 } from 'three';

const Box = (props) => {
	const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }));
	const [clicked, setClicked] = useState(false);
	const [wood] = useLoader(TextureLoader, ['wood.jpg']);

	return (
		<mesh ref={ref} scale={clicked ? 2 : 1} onClick={() => setClicked(!clicked)}>
			<boxGeometry />
			<meshStandardMaterial displacementScale={0.5} map={wood} />
		</mesh>
	);
};

const Sphere = (props) => {
	const [ref] = useSphere(() => ({ mass: 1, position: [0, 5, 0], ...props }));

	const [wood] = useLoader(TextureLoader, ['wood.jpg']);


	return (
		<mesh
			ref={ref}
			scale={1}
			
		>
			<sphereGeometry />
			<meshStandardMaterial displacementScale={0.2} map={wood} />
		</mesh>
	);
};

function Rig() {
	const { camera, mouse } = useThree();
	const vec = new Vector3();

	return useFrame(() => {
		camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.55);
		camera.lookAt(0, 0, 0);

	});
}

function Plane(props) {
	const [wood] = useLoader(TextureLoader, ['wood.jpg']);

	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
		...props,
	}));

	return (
		<mesh ref={ref} >
			<planeGeometry args={[30, 30]} />
			<meshStandardMaterial displacementScale={0.5} map={wood} />
		</mesh>
	);
}

const MainPage = () => {
	return (
		<>
			<main className="home__main">
				<Suspense fallback={null}>
					<Canvas>
						<Physics>
							<ambientLight intensity={0.1} />
							<pointLight position={[10, 10, 10]} />
							<Sphere position={[2, 5, -1]} />
							<Box position={[1, 2, -1]} />
							<Plane position={[1, -2, -1]} />
							<Rig />
						</Physics>
					</Canvas>
				</Suspense>
			</main>
		</>
	);
};

export default MainPage;
