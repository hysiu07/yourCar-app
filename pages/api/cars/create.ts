import createCar from '@/services/cars/create';

export default async (req, res) => {
	switch (req.method) {
		case 'POST':
			{
				try {
					const payload = req.body;
					console.log(payload);
					const car = await createCar(payload);
					console.log(car,'auto');
					res.status(200).json({ status: 'Car created ', car });
				} catch (error: any) {
					res.status(422).json({
						status: 'Not created',
						error: error.message,
					});
				}
			}
			break;

		default:
			res.status(400);
	}
};
