import styled from 'styled-components';

export const Main = styled.div`
	/* background: ${({ theme }) => theme.body}; */
	display: flex;
	align-items: center;
`;

export const MainImages = styled.div`
	height: 400px;
	width: 600px;
`;

export const ArrowNext = styled.div`
	width: 2%;
	height: 20px;
	border-bottom: 5px solid rebeccapurple;
	border-right: 5px solid rebeccapurple;
	transform: rotate(-45deg);

	cursor: pointer;
`;


export const ArrowPrev = styled.div`
	width: 2%;
	height: 20px;
	border-bottom: 5px solid rebeccapurple;
	border-left: 5px solid rebeccapurple;
	transform: rotate(45deg);

	cursor: pointer;
`;

export const MainPhoto = styled.img`
	opacity: 0;
	width: 0;
	height: 0;

	${({ isShow }) => {
		if (isShow) {
			return 'opacity: 1; width: 100%; height: 100%;';
		}
	}}
	transition-duration: 1s;
`;
