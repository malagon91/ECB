import Mongoose from 'mongoose';
import { ICarModel } from './model';

const CarSchema = new Mongoose.Schema(
	{
		id: { type: String, required: true },
		image: { type: String },
		model: { type: String },
		description: { type: String },
		make: { type: String },
		name: { type: String },
		inMaintenance: { type: Boolean, default: false },
		estimatedate: {
			type: String
		}
	},
	{ timestamps: true }
);

// @ts-ignore
export default Mongoose.model('Cars', CarSchema) as ICarModel;
