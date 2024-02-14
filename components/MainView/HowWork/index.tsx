import React from 'react';

export default function HowWork() {
	return (
		<section className='how-work'>
			<h2>HOW IT WORK</h2>
			<h3>Rent with follwing 3 rorking steps</h3>
			<div className='how-work__container'>
				<div className='location box'>
					<img src='/img/icons/location.svg' alt='location-icon' />
					<h4> Choose location</h4>
					<p>Choose your location and find your best car.</p>
				</div>
				<div className='pick-up box'>
					<img src='/img/icons/calendar.svg' alt='calendar-icon' />
					<h4>Pick-up date</h4>
					<p>Select your pick up date and time to book you car.</p>
				</div>
				<div className='book box'>
					<img src='/img/icons/car.svg' alt='car-icon' />
					<h4>Book your car</h4>
					<p>Book your car.</p>
				</div>
			</div>
		</section>
	);
}
