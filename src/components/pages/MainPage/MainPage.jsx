import React, { Suspense, useEffect, useRef, useState } from 'react';

import { Main } from './styles.js';
// import Slider from '../../common/Slider/index.js';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics, usePlane, useBox } from '@react-three/cannon';

function Box() {
	const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
	return (
		<mesh
			onClick={() => {
				api.velocity.set(0, 2, 0);
			}}
			ref={ref}
			position={[0, 2, 0]}
		>
			<boxGeometry attach="geometry" />
			<meshLambertMaterial attach="material" color="hotpink" />
		</mesh>
	);
}

function Plane() {
	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
	}));
	return (
		<mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
			<planeGeometry attach="geometry" args={[100, 100]} />
		</mesh>
	);
}

const MainPage = () => {
	return (
		<Main>
			<Canvas>
				<Suspense fallback="loading">
				<OrbitControls />
				<Stars />
				<ambientLight intensity={0.5} />
				<spotLight position={[10, 15, 10]} angle={0.3} />
				<Physics>
					<Box />
					<Plane />
				</Physics>
				</Suspense>
			</Canvas>
		</Main>
	);
};

export default MainPage;
