import React, { FC } from 'react';
import { TableRow, Col, Img } from './styles';

interface iItem {
	description?: string;
	make?: string;
	model?: string;
	estimatedate?: string;
	id?: number;
	image?: string;
}
interface iProps {
	item: iItem;
}

export const Item: FC<iProps> = ({ item }) => (
	<TableRow>
		<Col number={1}>{`${item.id} (${item.model})`}</Col>
		<Col number={2}>
			<Img src={item.image} />
		</Col>
		<Col number={3}>
			<h1>{item.estimatedate}</h1>
			<p>{item.description}</p>
		</Col>
		<Col number={4}>button</Col>
	</TableRow>
);
