import styled from 'styled-components';

export const Main = styled.div`
	/* background: ${({ theme }) => theme.body}; */
`;

export const MainContainer = styled.div`
	/* background: red; */
	width: 100%;
	margin: 0 auto;
	margin-top: 100px;
	background: linear-gradient(rgba(0, 0, 0, 0.719), rgb(143, 0, 124), rgb(136, 0, 125), black, black);
	position: relative;
	padding-bottom: 10px;
`;

export const MainImg = styled.img`
	width: 100%;
	max-width: 600px;
`;

export const MainTitleWrapper = styled.div`
	margin-top: 50px;
`;
export const MainTitle = styled.h2`
	position: absolute;
	font-family: Bayon;
	top: 10%;
	left: 65%;
	border-top: 1px solid grey;
	padding-top: 10px;

	&:nth-child(2) {
		top: 18%;
		border: none;
		border-bottom: 1px solid grey;
		padding-bottom: 10px;
	}
`;

export const WayContainer = styled.div``;
export const WayCard = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 20px;
`;
export const WayLeft = styled.div`
	font-family: Bayon;
	width: 40%;
`;
export const WayRight = styled.div`
	color: #8e00ed;
	display: flex;
	align-items: center;

	&::after {
		content: '';
		display: block;
		width: 1px;
		height: 100px;
		background: #8e00ed;
		margin-left: 10px;
	}
`;

export const WayRightBefore = styled.div`
	color: #8e00ed;
	display: flex;
	align-items: center;

	&::before {
		content: '';
		display: block;
		width: 1px;
		height: 100px;
		background: #8e00ed;
		margin-right: 10px;
	}
`;

export const WaySence = styled.h2`
	color: #8e00ed;
	text-align: center;
	&::after {
		content: '';
		display: block;
		width: 50px;
		height: 1px;
		background: #8e00ed;
		margin: 10px auto 0;
	}
`;

export const WaySenceText = styled.p`
	color: #ffffff;
	font-family: Bayon;
	width: 70%;
	margin: 0 auto;
`;

