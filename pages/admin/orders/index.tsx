import React, { useState } from 'react';
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
	const [moreInfo, setMoreInfo] = useState(false);
	return (
		<AdminPage>
			<div className='orders-container'>
				{orders.orders.map((order) => {
					return (
						<div className='order'>
							<div className='order-info'>
								<div className='box'>
									<span className='label'>Order ID:</span>
									<span >{order.airtableId}</span>
								</div>
								<div className='box'>
									<span className='label'>User email:</span>
									<span>{order.email[0]}</span>
								</div>
								<div className='box'>
									<span className='label'>User name:</span>
									<span>{order.username[0]}</span>
								</div>
								<div className='box'>
									<span className='label'>Location:</span>
									<span>{order.city}</span>
								</div>
								<div className='box'>
									<span className='label'>Price sum:</span>
									<span>{order.priceSum} USD</span>
								</div>
								<div className='box'>
									<span className='label'>Pick up:</span>
									<span>{order.pickUpDate} </span>
								</div>
								<div className='box'>
									<span className='label'>Retur:</span>
									<span>{order.returDate}</span>
								</div>
								<div className='box'>
									<span className='label'>Number days:</span>
									<span>{order.numberDays}</span>
								</div>
								<div className='box'>
									<span className='label'>Status:</span>
									<span>{order.status}</span>
								</div>
								<button
									className='btn-admin-page'
									onClick={() => {
										setMoreInfo(!moreInfo);
									}}
								>
									More info
								</button>
							</div>
						</div>
					);
				})}
			</div>
			<div></div>
		</AdminPage>
	);
}
