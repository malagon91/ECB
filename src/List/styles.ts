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
	border-radius: 6px;
	padding: 25px 30px;
	display: flex;
	position: relative;
	justify-content: space-between;
	margin-bottom: 25px;
	${props =>
		props.inMaintenance &&
		css`
			border: ${colors.blue} 1px solid;
		`}
	:after {
		${props =>
			props.inMaintenance &&
			css`
				background-color: ${colors.blue};
				color: white;
				position: absolute;
				content: 'In maintencance';
				display: block;
				-webkit-transition: all 0.4s ease-in-out;
				transition: all 0.4s ease-in-out;
				top: 0;
				left: 0;
				font-size: 14px;
				padding: 8px;
				border-radius: 5px;
			`}
	}
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
					flex-basis: 10%;
			  `
			: props.number == 3
			? css`
					flex-basis: 30%;
			  `
			: props.number == 4
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
	width: 100px;
	height: 30px;
	font-size: 15px;
	font-weight: 500;
	background: transparent;
	color: ${colors.blue};
	border: 2px ${colors.blue} solid;
	border-radius: 5px;
	cursor: pointer;
	text-align: center;
	padding-top: 3px;
	&:hover {
		color: white;
		background-color: ${colors.blue};
		border: 2px ${colors.blue} solid;
	}
`;
