
import React from 'react';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

 function ReservationComponent({reservation}) {
	const [showReservationPanel, setShowReservationPanel] = useState(false);
	// const reservationInfo = useSelector((state) => state.reservationInfo);
	 // console.log(reservationInfo);
	 console.log(reservation);
	return (
		<div
			className='reservation-component'
			style={showReservationPanel ? { left: '0' } : { left: '-30%' }}
		>
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
	);
}

const mapStateToProps = (state: any) => {
	return {
		reservation: state.reservationInfo,
	};
};
export default connect(mapStateToProps)(ReservationComponent);