import BaseLayout from '@/components/BaseLayout';
import PaginationComponent from '@/components/Pagination-component';
import ReservationComponentContent from '@/components/ReservationComponent/ReservationComponentContent';
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useSession } from 'next-auth/react';
import PaymentBtn from './PaymentBtn';
import { addOrderId, addReservation } from '@/redux/reservationinfo';
import { handleClientScriptLoad } from 'next/script';

const ReservationBtn = ({ user, reservation }) => {
	const dispatch = useDispatch();
	const [equipments, setEquipmnts] = useState<string[] | []>([]);

	reservation.equipments.forEach((eq: any) => {
		if (!equipments.includes(eq.title)) {
			setEquipmnts((prev) => [...prev, eq.title]);
		}
	});
	const addOrder = async (reservation) => {
		try {
			const payload = {
				username: [reservation.userID],
				priceSum: reservation.priceSum,
				insuranceType: reservation.insuranceType,
				insurancePrice: reservation.insurancePrice,
				pickUpDate: reservation.pickUpDate,
				returDate: reservation.returDate,
				numberDays: reservation.numberDays,
				city: reservation.city,
				carPrice: reservation.carInfo.carPrice,
				carName: reservation.carInfo.carName,
				offerId: [reservation.offerId],
				equipmentsSum: reservation.equipmentsSum,
				equipments: equipments,
			};

			const response = await fetch('/api/orders/add', {
				method: 'POST',
				body: JSON.stringify(payload),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error('Failed to add order');
			}

			const data = await response.json();

			const orderId = data.order[0].id;
			dispatch(addOrderId(orderId));
		} catch (error: any) {
			console.error('Error:', error.message);
		}
	};

	return (
		<button
			className={`reservation-btn ${reservation.reserved && 'disabled-btn'}`}
			onClick={() => {
				dispatch(addReservation(true));
				addOrder(reservation);
			}}
			disabled={reservation.reserved}
		>
			Reservation!
		</button>
	);
};

function SummaryPage({ reservation }) {
	const { data, data: session } = useSession();
	const handleCopyToClipboard = () => {
		navigator.clipboard.writeText('4242 4242 4242 4242');
	};
	return (
		<BaseLayout>
			<div className='summary-page'>
				<PaginationComponent />
				<div className='summary-page__summary-view-container'>
					<ReservationComponentContent reservation={reservation} />
				</div>
				{!session ? (
					<div className='info-container'>
						<p>You have to log in!</p>
					</div>
				) : (
					<>
						<div
							className='card-container'
							onClick={() => {
								handleCopyToClipboard();
							}}
						>
							Copy Visa Card 4242 4242 4242 4242
						</div>
						<ReservationBtn user={session.user} reservation={reservation} />
						<PaymentBtn user={session.user} />
					</>
				)}
			</div>
		</BaseLayout>
	);
}
const mapStateToProps = (state: any) => {
	return {
		reservation: state.reservationInfo,
	};
};
export default connect(mapStateToProps)(SummaryPage);
