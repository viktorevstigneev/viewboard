import styled from 'styled-components';

export const Main = styled.div`
	/* background: ${({ theme }) => theme.body}; */
`;

export const MainContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	margin-top: 100px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const MainTitle = styled.h2`
	font-family: Bayon;
	text-align: center;
`;

export const MainLink = styled.a`
	font-family: Bayon;
	text-align: center;
	padding: 10px 40px;
	border: 1px solid #5a0494;
	background: #5a0494;
	border-radius: 3px;
	color: #ffffff;
	text-decoration: none;
`;

export const MainPdf = styled.iframe`
	width: 90%;
	height: 100%;
	display: block;
	margin: 20px auto 0;
`;
