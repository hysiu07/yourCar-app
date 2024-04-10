import React from 'react';
import AdminPage from '..';
import getAllOrders from '@/services/orders/getAllOrders';
import Order from './(order)/Order';
export const getServerSideProps = async () => {
	const orders = await getAllOrders();
	return {
		props: {
			orders,
		},
	};
};

export default function AdminOrdersPage({ orders }) {
	return (
		<AdminPage>
			<div className='orders-container'>
				{orders.orders.map((order, index) => {
					return <Order order={order} key={index} />;
				})}
			</div>
			<div></div>
		</AdminPage>
	);
}
