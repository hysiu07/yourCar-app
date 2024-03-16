import deleteUser from '@/services/users/delete';

export default async (req, res) => {
	switch (req.method) {
		case 'DELETE':
			{
				try {
					const payload = req.body;
					const user = await deleteUser(payload);
					res.status(200).json({ status: 'User deleted', user });
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
