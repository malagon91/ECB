import styled, { css } from 'styled-components';
import colors from '../colors';

export const Container = styled('div')`
	max-width: 1000px;
	margin-left: auto;
	margin-right: auto;
`;

export const H2 = styled('h2')`
	font-size: 26px;
	margin: 20px 0;
	text-align: center;
	small {
		font-size: 0.5em;
	}
`;

export const Table = styled('ul')``;

export const TableHeader = styled('li')`
	background-color: #95a5a6;
	text-transform: uppercase;
	letter-spacing: 0.03em;
	border-radius: 3px;
	padding: 25px 30px;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;
export const TableRow = styled('li')`
	background-color: #ffffff;
	box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
	border-radius: 3px;
	padding: 25px 30px;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;
export const Col = styled('div')`
	display: flex;
	padding: 10px 0;
	font-size: 14px;

	&:before {
		color: #6c7a89;
		padding-right: 10px;
		content: attr(data-label);
		flex-basis: 50%;
		text-align: right;
	}
	${props =>
		props.header &&
		css`
			font-size: 20px;
		`}
	${props =>
		props.number == 1
			? css`
					flex-basis: 10%;
			  `
			: props.number == 2
			? css`
					flex-basis: 40%;
			  `
			: props.number == 3
			? css`
					flex-basis: 25%;
			  `
			: css`
					flex-basis: 25%;
			  `}
`;

export const Img = styled('img')`
	border-radius: 50%;
	width: 100px;
`;

export const Button = styled('button')`
	border-radius: 50%;
	width: 100px;
`;
