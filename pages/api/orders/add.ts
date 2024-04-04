import create from '@/services/orders/create';

export default async (req, res) => {
	switch (req.method) {
		case 'POST':
			{
				try {
					const payload = req.body;
					const order = await create(payload);
					res.status(200).json({ status: 'Added order', order });
				} catch (error: any) {
					res.status(422).json({ status: 'Not Added', error: error.message });
				}
			}
			break;
		default:
			res.status(400);
	}
};
