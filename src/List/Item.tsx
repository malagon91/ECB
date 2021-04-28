import React, { FC, useState } from 'react';
import { TableRow, Col, Img, Button, Form } from './styles';
import axios from 'axios';

interface iItem {
	_id?: string;
	description?: string;
	make?: string;
	model?: string;
	estimatedate?: string;
	id?: string;
	image?: string;
	inMaintenance?: boolean;
}
interface iProps {
	item: iItem;
	updateData: any;
}

export const Item: FC<iProps> = ({ item, updateData }) => {
	const [show, setShow] = useState(false);
	const [main, setMain] = useState(item.inMaintenance);
	const [name, setName] = useState('');
	const [date, setDate] = useState('');
	const [order, setOrder] = useState('');

	const update = async () => {
		try {
			await axios.put(`api/car/${item._id}`, {
				idCar: order,
				name,
				estimatedate: date,
				maintenance: main
			});
			updateData();
			setShow(false);
		} catch (e) {
			updateData();
			setShow(false);
		}
	};

	return (
		<div>
			<TableRow inMaintenance={item.inMaintenance}>
				<Col number={1}>{`${item.id} (${item.model})`}</Col>
				<Col number={2}>{item.estimatedate}</Col>
				<Col number={3}>
					<Img src={item.image} />
				</Col>
				<Col number={4}>{item.description}</Col>
				<Col number={5}>
					<Button
						onClick={() => {
							setShow(!show);
						}}
					>
						{show ? 'Cancel' : 'Update'}
					</Button>
				</Col>
			</TableRow>
			{show && (
				<Form>
					<h3>Update car: {item.id}</h3>
					<div>
						<label>Car user name</label>
						<input
							name="name"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div>
						<label>Estiamte Date </label>
						<input
							name="date"
							value={date}
							onChange={e => setDate(e.target.value)}
						/>
					</div>
					<div>
						<label>Order Number</label>
						<input
							name="order"
							value={order}
							onChange={e => setOrder(e.target.value)}
						/>
					</div>
					<div>
						<label>In maintenance</label>
						<input
							type="checkbox"
							name="main"
							checked={main}
							onChange={e => setMain(e.target.checked)}
						/>
					</div>
					<div>
						<Button onClick={() => update()}>Save</Button>
					</div>
				</Form>
			)}
		</div>
	);
};
