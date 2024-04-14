import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { reset } from '@/redux/reservationinfo';
import Link from 'next/link';
import { GiConfirmed } from 'react-icons/gi';

function ThanksPage({ reservation }) {
	const dispatch = useDispatch();
	const router = useRouter();
	const [currentReservations] = useState(reservation);

	const [status, setStatus] = useState<'Paid' | 'Not Paid' | 'Error' | null>(
		null
	);

	if (!currentReservations.reserved) {
		router.push('/');
	}
	useEffect(() => {
		if (!currentReservations.reserved) {
			router.push('/');
			return;
		}
		const updateOrder = async () => {
			try {
				const response = await fetch('/api/orders/upDate', {
					method: 'POST',
					body: JSON.stringify(currentReservations.orderId),
					headers: {
						'Content-Type': 'application/json',
					},
				});

				if (response.ok) {
					setStatus('Paid');
					const airtableId = currentReservations.offerId;
					const changeOfferStatus = await fetch('/api/offers/update', {
						method: 'POST',
						body: JSON.stringify({
							offerInfo: { status: 'not available' },
							offerAirtableId: airtableId,
						}),
						headers: {
							'Content-Type': 'application/json',
						},
					});
				} else {
					setStatus('Not Paid');
				}
			} catch (error: any) {
				console.error('Error:', error.message);
				setStatus('Error');
			}
		};
		updateOrder();
	}, []);
	dispatch(reset());
	return (
		<section className='thanks-page'>
			{currentReservations.reserved ? (
				<div className='panel'>
					<h3>Thank you for your order.</h3>
					<h4>Your order number is : {currentReservations.orderId} </h4>
					<h3>Status: {status}</h3>
					<GiConfirmed size={100} className='confirm-icon' color='green' />
					<Link href={'/'} className='link'>
						Home Page
					</Link>
				</div>
			) : (
				<h2>Booking error!</h2>
			)}
		</section>
	);
}
const mapStateToProps = (state: any) => {
	return {
		reservation: state.reservationInfo,
	};
};
export default connect(mapStateToProps)(ThanksPage);
