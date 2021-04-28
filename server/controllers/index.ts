import { Request, Response } from 'express';
import {
	insufficientParameters,
	mongoError,
	successResponse
} from '../modules/common/service';
import { ICar, ICarUpdate } from '../modules/cars/model';
import CarService from '../modules/cars/service';

export default class IndexController {
	private service = new CarService();

	public createCar = async (req: Request, res: Response) => {
		const { id, image, model, description, make, estimatedate } = req.body;
		if (id && make && model) {
			const car: ICar = {
				id,
				image,
				model,
				description,
				make,
				estimatedate
			};
			const { data, error } = await this.service.createCar(car);
			if (error) return mongoError(error, res);
			return successResponse('car added', data, res);
		} else insufficientParameters(res);
	};

	public getCars = async (req: Request, res: Response) => {
		const { data, error } = await this.service.getCars();
		if (error) return mongoError(error, res);
		return successResponse('data', data, res);
	};

	public updateCar = async (req: Request, res: Response) => {
		const { idCar, name, estimatedate, maintenance } = req.body,
			{ id } = req.params;

		if (id && idCar && name && estimatedate) {
			const car: ICarUpdate = {
				id: idCar,
				name,
				estimatedate,
				inMaintenance: maintenance || false
			};
			const { data, error } = await this.service.updateCar(id, car);
			if (error) return mongoError(error, res);
			return successResponse('car added', data, res);
		} else insufficientParameters(res);
	};
}
