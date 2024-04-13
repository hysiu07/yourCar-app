import getOrder from '@/services/orders/getOrder';

export default async (req, res) => {
	switch (req.method) {
		case 'POST':
			{
				try {
					const payload = req.body;
					const order = await getOrder(payload);
					res.status(200).json({ order });
				} catch (error: any) {
					res.status(422).json({ error: error.message });
				}
			}
			break;
		default:
			res.status(400);
	}
};
