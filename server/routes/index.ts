import { Application, Request, Response } from 'express';

export default class IndexRoutes {
	public route(app: Application) {
		app.use('*', (req: Request, res: Response) => {
			res.render('index', {});
		});
	}
}
