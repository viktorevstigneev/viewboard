import styled from 'styled-components';
const swordColor = 'red';
const swordLight = 'white';

export const Main = styled.div``;

export const MainTitle = styled.h2`
	font-family: Star;
	font-size: clamp(3rem, 12 * (1vh + 1vw) / 2, 8rem);
	text-align: center;
	color: ${({ theme }) => theme.text};
	filter: none;
	width: fit-content;
	margin: 10% auto 0;
	display: flex;
	transition: 2s;

	::before {
		content: '';

		display: block;
		background: linear-gradient(90deg, black, white);

		margin-right: 15px;
		height: 4px;

		width: 90px;

		border-bottom-left-radius: 100px;
		border-top-left-radius: 100px;
	}

	::after {
		content: '';

		display: block;
		background: linear-gradient(-90deg, black, white);

		margin-left: 15px;
		height: 4px;

		width: 90px;

		border-bottom-right-radius: 100px;
		border-top-right-radius: 100px;
	}

	@media (max-width: 400px) {
		margin-top: 100px;
		font-size: 30px;
	}
`;

export const MainOctagon = styled.img`
	cursor: pointer;
`;

export const MainSword = styled.div`
	display: block;
	width: 150px;
	height: 10px;
	background: linear-gradient(white, red, white);

	box-shadow: 3px 0 14px 2px rgba(255, 0, 23, 1);
	transition: transform 100ms ease-out;
	transform-origin: bottom;
	transition: 0.5s;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;

	width: ${(props) => (props.isOpen ? '150px' : '0')};
`;
