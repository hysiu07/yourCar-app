import airDb from '../airtableClient';

const getOrder = async (id) => {
	const order = await airDb('orders').find(id);

	return {
		order,
	};
};
export default getOrder;
