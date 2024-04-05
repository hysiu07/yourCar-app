import BaseLayout from '@/components/BaseLayout';
import PaginationComponent from '@/components/Pagination-component';
import ReservationComponentContent from '@/components/ReservationComponent/ReservationComponentContent';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import { useSession } from 'next-auth/react';
import PaymentBtn from './PaymentBtn';
import { addReservation, addUser } from '@/redux/reservationinfo';

const ReservationBtn = ({ user, reservation }) => {
	const dispatch = useDispatch();
	console.log(reservation);
	console.log(user);

	const [equipments, setEquipmnts] = useState<string[] | []>([]);

	reservation.equipments.forEach((eq) => {
		if (!equipments.includes(eq.title)) {
			setEquipmnts((prev) => [...prev, eq.title]);
		}
	});
	const addOrder = async (reservation) => {
		console.log(reservation.equipments);
		console.log(equipments);
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
		} catch (error: any) {
			console.error('Error:', error.message);
		}
	};
	return (
		<button
			onClick={() => {
				dispatch(addReservation(true));
				addOrder(reservation);
			}}
			// disabled={reservation.reserved}
		>
			Reservation
		</button>
	);
};

function SummaryPage({ reservation }) {
	const { data, data: session } = useSession();
	console.log(session);
	// if (session.user && session.user.id) {

	// 	const user = session?.user?.id;
	// }
	// console.log(user.id);
	const dispatch = useDispatch();

	const addOrder = async () => {
		try {
			const payload = {
				username: [reservation.username],
			};

			const response = await fetch('/api/orders/add', {
				method: 'POST',
				body: JSON.stringify(payload),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			// await dispatch(reset());

			if (!response.ok) {
				throw new Error('Failed to add order');
			}
		} catch (error: any) {
			console.error('Error:', error.message);
		}
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
						{/* <button
							onClick={() => {
								// dispatch(addReservation(true));
								 if (session.user && session.user.name) {
										// Sprawdzamy czy session.user i session.user.id istnieją
										dispatch(addUser(session.user.name));
										addOrder();
									}
							}}
							// disabled={reservation.reserved}
						>
							Reservation
						</button> */}
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
