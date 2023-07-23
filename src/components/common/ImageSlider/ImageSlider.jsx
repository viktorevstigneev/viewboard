import React, { useState } from 'react';

import { Main, MainPhoto, MainImages, ArrowPrev, ArrowNext } from './styles.js';

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};
	return (
		<Main>
			<ArrowPrev onClick={prevSlide}></ArrowPrev>

			<MainImages>
				{slides.map((slide, index) => {
					return <MainPhoto src={slide} isShow={current === index} alt="travel image" />;
				})}
			</MainImages>

			<ArrowNext onClick={nextSlide}> </ArrowNext>
		</Main>
	);
};

export default ImageSlider;
