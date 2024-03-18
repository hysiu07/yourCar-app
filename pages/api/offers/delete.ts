import deleteOffer from '@/services/offers/delete';

export default async (req, res) => {
	switch (req.method) {
		case 'DELETE':
			{
				try {
					const payload = req.body;
					const offer = await deleteOffer(payload);
					res.status(200).json({ status: 'Offer deleted ', offer });
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
