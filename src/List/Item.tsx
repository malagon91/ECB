import React, { FC } from 'react';
import { TableRow, Col, Img, Button } from './styles';

interface iItem {
	description?: string;
	make?: string;
	model?: string;
	estimatedate?: string;
	id?: number;
	image?: string;
	inMaintenance?: boolean;
}
interface iProps {
	item: iItem;
}

export const Item: FC<iProps> = ({ item }) => (
	<TableRow inMaintenance={item.inMaintenance}>
		<Col number={1}>{`${item.id} (${item.model})`}</Col>
		<Col number={2}>{item.estimatedate}</Col>
		<Col number={3}>
			<Img src={item.image} />
		</Col>
		<Col number={4}>{item.description}</Col>
		<Col number={5}>
			<Button>Update</Button>
		</Col>
	</TableRow>
);
