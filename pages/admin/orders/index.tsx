import React from 'react';
import AdminPage from '..';
import getAllOrders from '@/services/orders/getAllOrders';

export const getServerSideProps = async () => {
	const orders = await getAllOrders();
	return {
		props: {
			orders,
		},
	};
};
export default function AdminOrdersPage({ orders }) {
	console.log(orders);
	return (
		<AdminPage>
			{orders.orders.map((order) => {
				return (
					<div className='orders-container'>
						<div className='order'></div>
					</div>
				);
			})}
			<div></div>
		</AdminPage>
	);
}
