import styled from 'styled-components';

export const HeaderWrapper = styled.header`
	background: ${({ theme }) => theme.headerBackground};
	padding: 10px;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1000;
`;
