import React, { Suspense, useRef } from 'react';
import { Main } from './styles.js';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

import Slider from '../../common/Slider';
import NeuralNetwork from '../../common/Car/Car.js';
import Face from '../../common/Face/Face.js';
import FacePown from '../../common/FacePown/FacePown.js';
import { OrbitControls, Stars, Stats } from '@react-three/drei';
// import GodR from '../../common/RightHand/RightHand.js';



// 	const [fff] = useLoader(TextureLoader, ['textures/fff.jpg']);

const MainPage = () => {
	return (
		<Main>
			<Suspense fallback={<Slider />}>
				<Canvas camera={{ position: [30, 0, 2] }}>
					{/* <ambientLight intensity={2} />
					<pointLight position={[0, 0, 0]} />
					<ambientLightProbe position={[0, 0, 0]} />
					<NeuralNetwork />
					<Face />
					<FacePown x={-0.6} y={1.8} z={3} />
					<Stars /> */}
				</Canvas>
			</Suspense>
		</Main>
	);
};

export default MainPage;
