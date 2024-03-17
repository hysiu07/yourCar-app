import upDate from '@/services/users/upDate';

export default async (req, res) => {
	switch (req.method) {
		case 'POST': {
			try {
				const payload = req.body;
				const infoUser = payload.userInfo;
				const airtbaleId = payload.userAirtableId;
				console.log(payload);
				const user = await upDate(infoUser, airtbaleId);
				res.status(200).json({ status: 'UpDated', user });
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
