import React, { useRef, useState } from 'react';
import AdminPage from '..';
import getAllOrders from '@/services/orders/getAllOrders';
import Order from './(order)/Order';
import { useRouter } from 'next/router';

export const getServerSideProps = async () => {
	const orders = await getAllOrders();
	return {
		props: {
			orders,
		},
	};
};

export default function AdminOrdersPage({ orders }) {
	const [data, setOrders] = useState(orders.orders);
	const formSearch = useRef<any | null>(null);
	const router = useRouter();
	const addOrder = async () => {
		const searchOrder = new FormData(formSearch.current);
		const id = searchOrder.get('id');
		try {
			const response = await fetch('/api/orders/order', {
				method: 'POST',
				body: JSON.stringify(id),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.ok) {
				const data = await response.json();
				setOrders([data.order.order.fields]);
			} else {
				throw new Error('Fail');
			}
		} catch (error: any) {
			console.error('Error:', error.message);
		}
	};

	return (
		<AdminPage>
			<div className='orders-container'>
				<form ref={formSearch} >
					<input type='text' name='id' placeholder='Order ID' />
					<button
						className='btn-admin-page'
						onClick={(e) => {
							e.preventDefault();
							addOrder();
						}}
					>
						Search!
					</button>
					<button
						className='btn-admin-page'
						onClick={() => {
							router.push('/admin/orders');
						}}
					>
						Reset
					</button>
				</form>
				{data.map((order, index) => {
					return <Order order={order} key={index} />;
				})}
			</div>
		</AdminPage>
	);
}
