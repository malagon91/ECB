import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import IndexRoutes from './routes';
import config from '../scripts/config';
const envs = {
	dev: 'DEVELOPMENT',
	prod: 'PRODUCTION'
};

class App {
	public app: express.Application;
	private env = process.env.NODE_ENV;
	private isProd = this.env === envs.prod;
	public mongoUrl: string = this.isProd
		? config.mongoUrl.prod
		: config.mongoUrl.dev;
	private index_routes = new IndexRoutes();

	constructor() {
		this.app = express();
		this.config();
		this.mongoSetup();
		this.index_routes.route(this.app);
	}

	private config(): void {
		this.app.use(express.static('public'));
		this.app.set('view engine', 'ejs');
		this.app.use(cors());
		this.app.use(require('morgan')('dev'));
		this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.use(bodyParser.json());
		this.app.use(express.static(path.join(__dirname, 'public')));
	}

	private mongoSetup(): void {
		mongoose.connect(this.mongoUrl, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		});
	}
}
export default new App().app;
