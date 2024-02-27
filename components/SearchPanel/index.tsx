import Link from 'next/link';
import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { useRouter } from 'next/router';

export default function SearchPanel() {
	const router = useRouter();
	const orderForm = useRef<null | any>(null);
	const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
	const [tomorrowDate, setTomorrowDate] = useState<Date | null>();

	useEffect(() => {
		const tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		setTomorrowDate(tomorrow);
	}, []);
	const handleSearchCar = async (e) => {
		e.preventDefault();
		const form = new FormData(orderForm.current);
		const payload = {
			location: form.get('location'),
			pickUpDate: form.get('pickup-date'),
			returDate: form.get('return-date'),
		};
		if (payload.location && payload.pickUpDate && payload.returDate) {
			router.push(
				`/order/${payload.location}/${payload.pickUpDate}/${payload.returDate}`
			);
		}
	};

	return (
		<div className='search-panel'>
			<form action='Find your car' ref={orderForm}>
				<div className='form-item'>
					<label htmlFor='location'>Location:</label>
					<select name='location' id=''>
						Select your location
						<option value='krakow'>Krakow</option>
						<option value='warsaw'>Warsaw</option>
						<option value='pozan'>Poznan</option>
						<option value='gdansk'>Gdansk</option>
						<option value='wroclaw'>Wroclaw</option>
					</select>
				</div>
				<div className='form-item'>
					<label htmlFor='date-pickup'>Pickup date:</label>
					<input
						type='date'
						name='pickup-date'
						defaultValue={
							selectedDate
								? selectedDate.toISOString().split('T')[0]
								: undefined
						}
					/>
				</div>
				<div className='form-item'>
					<label htmlFor='date-return'>Return date:</label>
					<input
						type='date'
						name='return-date'
						defaultValue={
							tomorrowDate
								? tomorrowDate.toISOString().split('T')[0]
								: undefined
						}
					/>
				</div>
				<button type='submit' onSubmit={handleSearchCar}>
					Search!
				</button>
			</form>
		</div>
	);
}
