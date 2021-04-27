import styled from 'styled-components';
import colors from '../colors';

export const Container = styled('div')`
	width: 100%;
	background-color: ${colors.blue};
	height: 150px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Title = styled('h2')`
	font-size: 50px;
	font-weight: bold;
	color: white;
`;
