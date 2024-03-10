import React from 'react';

import { FaLocationDot } from 'react-icons/fa6';
import { FaCalendar } from 'react-icons/fa';

export default function ReservationComponentContent({ reservation }) {
	return (
		<div>
			<div className='reservation-component-content'>
				<h3>Your Reservation</h3>

				<button className='btn'>Cancel your reservation</button>
				<h5>Location and Date:</h5>
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

				{reservation.carInfo && (
					<div className='car'>
						<h5>Car:</h5>
						<img src={reservation.carInfo.carImg} alt='car' />
						<div className='car-info-box'>
							<h4>{reservation.carInfo.carName}</h4>
							<p>{reservation.carInfo.carType}</p>
							<p>{reservation.carInfo.carPrice} USD</p>
						</div>
					</div>
				)}
				<hr />
				{reservation.insuranceType && (
					<div className='insurance'>
						<h5>Insurance:</h5>
						<div className='box'>
							<p>{reservation.insuranceType}</p>
							<p>{reservation.insurancePrice} USD</p>
						</div>
					</div>
				)}
				<hr />
				{reservation.equipment && (
					<div className='equipment'>
						<h5>Equipment</h5>
						{reservation.equipment.map((item) => {
							return <p>{item}</p>;
						})}
					</div>
				)}
			</div>
		</div>
	);
}
