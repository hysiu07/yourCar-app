
import getUser from '@/services/users/get';

export default async (req, res) => {
	switch (req.method) {
		case 'POST':
			{
				try {
					const email = req.body;
					const user = await getUser(email);
					res.status(200).json({ user });
				} catch (error: any) {
					res.status(422).json({ error: error.message });
				}
			}
			break;
		default:
			res.status(400);
	}
};
