import app from './server';

const PORT: string | number = process.env.PORT || 5001;

app.listen(PORT, () => {
	console.log('Express server listening on port ' + PORT);
});
