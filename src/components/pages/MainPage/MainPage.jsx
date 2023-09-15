import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Main, MainLeft, MainOctagon, MainTitle, MainRight, MainSword } from './styles.js';
import sith from '../../../img/good.png';
import dgedai from '../../../img/dab.png';
import './style.css';

// import { Canvas, useFrame, useLoader } from '@react-three/fiber';
// import { TextureLoader } from 'three/src/loaders/TextureLoader';

// import Slider from '../../common/Slider';
// import NeuralNetwork from '../../common/Car/Car.js';
// import Face from '../../common/Face/Face.js';
// import FacePown from '../../common/FacePown/FacePown.js';
// import { OrbitControls, Stars, Stats } from '@react-three/drei';
// import GodR from '../../common/RightHand/RightHand.js';

// 	const [fff] = useLoader(TextureLoader, ['textures/fff.jpg']);

// const MainPage = () => {
// 	return (
// 		<Main>
// 			<Suspense fallback={<Slider />}>
// 				<Canvas camera={{ position: [30, 0, 2] }}>
// 					{/* <ambientLight intensity={2} />
// 					<pointLight position={[0, 0, 0]} />
// 					<ambientLightProbe position={[0, 0, 0]} />
// 					<NeuralNetwork />
// 					<Face />
// 					<FacePown x={-0.6} y={1.8} z={3} />
// 					<Stars /> */}
// 				</Canvas>
// 			</Suspense>
// 		</Main>
// 	);
// };

const MainPage = () => {
	const [isDark, setDark] = useState(true);
	const [isLight, setLight] = useState(false);

	useEffect(() => {}, []);

	return (
		<Main>
			<div class="stars">
				<div class="twinkling">
					<MainTitle>
						{isDark && 'Dark side'}
						{isLight && 'light side'}
					</MainTitle>
					<div className="center">
						<MainOctagon
							src={sith}
							onClick={() => {
								setDark(false);

								setTimeout(() => {
									setLight(true);
								}, 1000);
							}}
						></MainOctagon>
						<div
							class="darksaber"
							style={{ transform: `rotate(${isDark ? '40deg' : '-40deg'})`, transition: 'transform 1s' }}
						>
							<input type="checkbox" id="on-off" checked={isDark || isLight} />
							<div
								class="blade"
								style={{
									background: isDark ? 'rgba(255, 0, 0, 0.678)' : 'rgba(4, 0, 255, 0.678)',
									boxShadow: `1px 4px 23px 12px ${isDark ? 'rgba(255, 0, 0, 1)' : 'rgba(4, 0, 255, 0.678)'} `,
								}}
							></div>
							<label class="handle" id="darksaber" for="on-off"></label>
						</div>
						<MainOctagon
							src={dgedai}
							onClick={() => {
								setLight(false);

								setTimeout(() => {
									setDark(true);
								}, 1000);
							}}
						></MainOctagon>
					</div>
				</div>
			</div>
		</Main>
	);
};

export default MainPage;
