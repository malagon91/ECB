import { Response } from 'express';
import { response_status_codes } from './model';

export const successResponse = (message: string, data: any, res: Response) =>
	res.status(response_status_codes.success).json({
		success: true,
		message: message,
		data
	});

export const failureResponse = (message: string, data: any, res: Response) =>
	res.status(response_status_codes.success).json({
		success: false,
		message: message,
		data
	});

export const insufficientParameters = (res: Response) =>
	res.status(response_status_codes.bad_request).json({
		success: false,
		message: 'Insufficient parameters',
		data: {}
	});

export const mongoError = (err: any, res: Response) =>
	res.status(response_status_codes.internal_server_error).json({
		success: false,
		message: 'MongoDB error',
		data: err
	});
