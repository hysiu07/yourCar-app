import React, { useEffect } from 'react';
import { useState } from 'react';

import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import { FaLocationDot } from 'react-icons/fa6';
import { FaCalendar } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import getCar from '@/services/cars/getCar';




function ReservationComponent({ reservation }) {
	const [showReservationPanel, setShowReservationPanel] = useState(false);
	const router = useRouter();
	const [showComponent, setShowComponent] = useState(true);
	console.log(reservation);

	// if (reservation.carId) {
	// 	const car = getCar(9);
	// 	console.log(reservation.carId);
	// 	console.log(car);
	// }

	useEffect(() => {
		if (router.pathname === '/order/insurance/equipment/summary') {
			setShowComponent(false);
		}
	}, []);

	return (
		reservation.processing &&
		showComponent && (
			<div
				className='reservation-component'
				style={showReservationPanel ? { left: '0' } : { left: '-30%' }}
			>
				<div className='reservation-component__content'>
					<h3>Your Reservation</h3>

					<button className='btn'>Cancel your reservation</button>
					<div className='location-and-date'>
						<div className='box'>
							<FaLocationDot size={20} className='icon' />

							<p>{reservation.city}</p>
						</div>
						<div className='box'>
							<FaCalendar size={20} className='icon' />
							<p>{reservation.pickUpDate}</p>
						</div>
						<div className='box'>
							<FaCalendar size={20} className='icon' />
							<p>{reservation.returDate}</p>
						</div>
					</div>
					<hr />
					<div className='car'>
						<div className='box'>
							<FaLocationDot size={20} className='icon' />

							<p>{reservation.city}</p>
						</div>
						<div className='box'>
							<FaCalendar size={20} className='icon' />
							<p>{reservation.pickUpDate}</p>
						</div>
						<div className='box'>
							<FaCalendar size={20} className='icon' />
							<p>{reservation.returDate}</p>
						</div>
					</div>
				</div>
				<div
					className='reservation-component__btn-show-panel'
					onClick={() => {
						setShowReservationPanel(!showReservationPanel);
					}}
				>
					<FaArrowRight
						className='arrow'
						size={30}
						style={
							showReservationPanel
								? { transform: 'rotate(180deg)' }
								: { transform: 'rotate(0deg)' }
						}
					/>
				</div>
			</div>
		)
	);
}

const mapStateToProps = (state: any) => {
	return {
		reservation: state.reservationInfo,
	};
};
export default connect(mapStateToProps)(ReservationComponent);
