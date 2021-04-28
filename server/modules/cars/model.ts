import { Document, Model } from 'mongoose';

export interface ICar {
	id: string;
	estimatedate?: Date;
	image: string;
	model: string;
	description: string;
	make: string;
	name?: string;
	inMaintenance?: boolean;
}

export interface ICarUpdate {
	name: string;
	estimatedate: Date;
	id: string;
	inMaintenance: boolean;
}

// @ts-ignore
export interface ICarDocument extends ICar, Document {
	paginate?: any;
}

// @ts-ignore
export interface ICarModel extends Model<ICarDocument> {
	paginate?: any;
}
