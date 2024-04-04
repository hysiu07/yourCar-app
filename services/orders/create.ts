import airDb from '../airtableClient';

const create = async (payload) => {
	const order = await airDb('orders').create([
		{
			fields: {
                username: payload.username,
                email: payload.email
			},
		},
	]);
	return order;
};
export default create;
