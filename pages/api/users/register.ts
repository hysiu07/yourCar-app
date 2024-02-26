import createUser from '../../../services/users/create';

export default async (req, res) => {
	switch (req.method) {
		case 'POST': {
			try {
				const payload = req.body;
				const user = await createUser(payload);
				res.status(200).json({ status: 'Created', user });
			} catch (error: any) {
				res.status(422).json({
					status: 'Not Created',
					error: error.message,
				});
			}
			break;
		}
		default:
			res.status(400);
	}
};

