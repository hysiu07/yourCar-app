import deleteCar from '@/services/cars/delete';

export default async (req, res) => {
	switch (req.method) {
		case 'DELETE':
			{
				try {
					const payload = req.body;
					const car = await deleteCar(payload);
					res.status(200).json({ status: 'Car deleted ', car });
				} catch (error: any) {
					res.status(422).json({
						status: 'Not deleted',
						error: error.message,
					});
				}
			}
			break;

		default:
			res.status(400);
	}
};
