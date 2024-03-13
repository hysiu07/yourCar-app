import React, { useEffect } from 'react';
import { useState } from 'react';

import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import { FaArrowRight } from 'react-icons/fa';

import ReservationComponentContent from './ReservationComponentContent';
import Link from 'next/link';

function ReservationComponent({ reservation }) {
	const [showReservationPanel, setShowReservationPanel] = useState(false);
	const router = useRouter();
	const [showComponent, setShowComponent] = useState(true);

	useEffect(() => {
		if (router.pathname === '/order/insurance/equipment/summary') {
			setShowComponent(false);
		}
	}, []);
	const getNextStep = (reservation) => {
		if (reservation.processing && !reservation.insuranceType) {
			return '/insurance';
		} else if (reservation.insuranceType && !reservation.equipments) {
			return '/insurance/equipment';
		} else if (reservation.equipments && reservation.insuranceType) {
			return '/insurance/equipment/summary';
		}
	};

	return (
		reservation.processing &&
		showComponent && (
			<div
				className='reservation-component'
				style={showReservationPanel ? { left: '0' } : { left: '-30%' }}
			>
				<ReservationComponentContent reservation={reservation} />

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
				<Link
					className='link-continue-reservation'
					href={`/order/${getNextStep(reservation)}`}
				>
					Continue...
				</Link>
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
