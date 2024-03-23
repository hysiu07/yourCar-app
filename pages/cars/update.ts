import createCar from '@/services/cars/create';
import upDate from '@/services/cars/upDate';

export default async (req, res) => {
	switch (req.method) {
		case 'POST':
			{
				try {
					const payload = req.body;
					const car = await upDate();
					res.status(200).json({ status: 'Added car', car });
				} catch (error: any) {
					res.status(422).json({ status: 'Not Added', error: error.message });
				}
			}
			break;
		default:
			res.status(400);
	}
};
