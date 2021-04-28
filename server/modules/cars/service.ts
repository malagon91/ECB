import Cars from './schema';
import { ICar, ICarUpdate } from './model';

export default class CarService {
	public async createCar(car: ICar) {
		try {
			const _car = new Cars(car);
			const data = await _car.save();
			return { data };
		} catch (error) {
			return error;
		}
	}

	public async updateCar(id: string, car: ICarUpdate) {
		try {
			await Cars.findByIdAndUpdate(id, car).exec();
			const data = await Cars.findById(id).exec();
			return { data };
		} catch (error) {
			return error;
		}
	}

	public async getCars() {
		try {
			const data = await Cars.find({}).exec();
			return { data };
		} catch (error) {
			return error;
		}
	}
}
