import React from 'react';
import { Main, MainContainer, MainLink, MainPdf, MainTitle } from './styles.js';

import pdfFile from '../../../img/VIKTOR_EVSTIGNEEV_CV.pdf';

const AboutPage = () => {
	console.log('pdfFile: ', pdfFile);
	return (
		<Main>
			<MainContainer>
				<MainTitle>My CV</MainTitle>
				<MainLink href={pdfFile} download>
					Download
				</MainLink>
			</MainContainer>

			<MainPdf src={pdfFile} id="fred" title="PDF in an i-Frame" frameborder="1" scrolling="auto"></MainPdf>
		</Main>
	);
};

export default AboutPage;
