import airDb from '../airtableClient';

const getAllOrders = async () => {
	const orders = await airDb('orders')
		.select()
		.firstPage();
	if (orders && orders.length > 0) {
		return {
			orders: orders.map((order) => ({
				airtableId: order.id,
				...order.fields,
			})),
		};
	} else {
		return { orders: [] };
	}
};
export default getAllOrders;
