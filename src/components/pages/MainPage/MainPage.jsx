import React, { Suspense, useRef } from 'react';
import { Main } from './styles.js';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

import Slider from '../../common/Slider';
import NeuralNetwork from '../../common/Car/Car.js';
import Face from '../../common/Face/Face.js';
import FacePown from '../../common/FacePown/FacePown.js';
import { OrbitControls, Stats } from '@react-three/drei';
// import GodR from '../../common/RightHand/RightHand.js';

import { Html, useProgress } from '@react-three/drei';

// import { Html } from '@react-three/drei'
// import { SolarSystemLoading } from 'react-loadingg';

function Loader() {
	const { progress } = useProgress();
	return <Html center>{progress} % loaded</Html>;
}

// export default function Loader() {
//   return <Html center style={{zIndex:'500', paddingRight: '54px'}}><SolarSystemLoading color='white' size='large'/></Html>
// }

// 	const [fff] = useLoader(TextureLoader, ['textures/fff.jpg']);

const MainPage = () => {
	return (
		<Main>
			<Suspense fallback={<Slider />}>
				<Canvas fov={150} camera={{ position: [30, 0, 2] }}>
					<ambientLight intensity={2} />
					<pointLight position={[0, 0, 0]} />
					<ambientLightProbe position={[0, 0, 0]} />
					<NeuralNetwork />
					<Face />
					<FacePown x={-0.6} y={1} z={3} />

				</Canvas>

				{/* <GodR/> */}
			</Suspense>
		</Main>
	);
};

export default MainPage;
