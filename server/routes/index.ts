import { Application, Request, Response } from 'express';
import IndexController from '../controllers';
export default class IndexRoutes {
	private index = new IndexController();
	public route(app: Application) {
		app.post('/api/car', this.index.createCar);
		app.put('/api/car/:id', this.index.updateCar);
		app.get('/api/car', this.index.getCars);
		app.use('*', (req: Request, res: Response) => {
			res.render('index', {});
		});
	}
}
