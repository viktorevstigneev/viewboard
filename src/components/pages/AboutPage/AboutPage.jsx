import React from 'react';
import {
	Main,
	MainContainer,
	MainImg,
	MainTitleWrapper,
	MainTitle,
	WayContainer,
	WayCard,
	WayLeft,
	WayRight,
	WayRightBefore,
	WaySence,
	WaySenceText,
} from './styles.js';

import aboutImg from '../../../img/about.png';

const AboutPage = () => {
	return (
		<Main>
			<MainContainer>
				<MainImg src={aboutImg} />
				<MainTitleWrapper>
					<MainTitle>Viktor</MainTitle>
					<MainTitle>Evstigneev</MainTitle>
				</MainTitleWrapper>
			</MainContainer>

			<WayContainer>
				<WayCard>
					<WayLeft>In 2017 i enetered cpllege and promise myself to graduate with honors degree</WayLeft>
					<WayRight>2017</WayRight>
				</WayCard>

				<WayCard>
					<WayRightBefore>2019</WayRightBefore>
					<WayLeft>
						went to a meetup at an it company, was inspired by the vibe of programmers and from that day on began
						studying web development
					</WayLeft>
				</WayCard>

				<WayCard>
					<WayLeft>
						accumulated enough experience, in my opinion, and began to draw up a resume, passed an interview and went on
						an internship at instinctools
					</WayLeft>
					<WayRight>2020</WayRight>
				</WayCard>

				<WayCard>
					<WayRightBefore>2021</WayRightBefore>
					<WayLeft>
						got a job at instinctools, graduated from college with honors, worked for an English-speaking client
					</WayLeft>
				</WayCard>
			</WayContainer>

			<WaySence>Summary</WaySence>

			<WaySenceText>
				My name is Victor, the main focus is react js, but this does not negate the fact that I know many other
				libraries and frameworks. I know OOP principles, SOLID principles, TDD/BDD. In all the technologies that I
				studied, I began to understand them deeply, but not superficially. For a whole year I worked with an
				English-speaking client and a team, worked according to the Agile methodology, there were dailies and a
				retrospective. About me: I am very stress-resistant, communicative, I can solve problems that arise on a project
				in a team. I always go ahead and I am sure that I will be a great addition to your team, although if there is
				none, I am ready to lead the project on my own. At the same time, I always study new technologies and teach
				others, because this is also an important skill and I like it.
			</WaySenceText>
		</Main>
	);
};

export default AboutPage;
