import React, { FC } from 'react';
import { Container, Table, TableHeader, Col } from './styles';
import { Item } from './Item';
import { data } from '../info';
export const List: FC<any> = () => (
	<Container>
		<Table>
			<TableHeader>
				<Col number={1} header>
					ID
				</Col>
				<Col number={2} header>
					Image
				</Col>
				<Col number={3} header>
					Information
				</Col>
				<Col number={4} header>
					Estatus
				</Col>
			</TableHeader>
			{data.map((item, index) => (
				<Item item={item} key={index} />
			))}
		</Table>
	</Container>
);
