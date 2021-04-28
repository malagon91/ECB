import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table, TableHeader, Col } from './styles';
import { Item } from './Item';
import { data } from '../info';
export const List: FC<any> = () => {
	const [cars, setCars] = useState([]);
	const getData = async () => {
		try {
			const { data } = await axios.get('/api/car');
			setCars(data?.data || []);
		} catch (e) {
			setCars([]);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<Container>
			<Table>
				<TableHeader>
					<Col number={1} header>
						ID
					</Col>
					<Col number={2} header>
						Estimate
					</Col>
					<Col number={3} header>
						Image
					</Col>
					<Col number={4} header>
						Information
					</Col>
					<Col number={5} header>
						Estatus
					</Col>
				</TableHeader>
				{cars.map((item, index) => (
					<Item item={item} key={index} />
				))}
			</Table>
		</Container>
	);
};
