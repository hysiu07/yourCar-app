import upDate from '@/services/offers/upDate';

export default async (req, res) => {
	switch (req.method) {
		case 'POST': {
			try {
				const payload = req.body;
				const infoOffer = payload.offerInfo;
				const airtbaleId = payload.offerAirtableId;
				console.log(payload);
				const offer = await upDate(infoOffer, airtbaleId);
				res.status(200).json({ status: 'UpDated', offer });
			} catch (error: any) {
				res.status(422).json({
					status: 'Not Updated',
					error: error.message,
				});
			}
			break;
		}
		default:
			res.status(400);
	}
};
