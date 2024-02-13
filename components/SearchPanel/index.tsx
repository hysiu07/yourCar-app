import React, { useEffect } from 'react';
import { useState } from 'react';

export default function SearchPanel() {
	const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
	const [tomorrowDate, setTomorrowDate] = useState<Date | null>();
	useEffect(() => {
		const tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		setTomorrowDate(tomorrow);
	}, []);

	return (
		<div className='search-panel'>
			<form action='Find your car'>
				<div className='form-item'>
					<label htmlFor='location'>Location</label>
					<select name='location' id=''>
						Select your location
						<option value='krakow'>Krakow</option>
						<option value='krakow'>Warsaw</option>
						<option value='krakow'>Poznan</option>
						<option value='krakow'>Gdansk</option>
						<option value='krakow'>Wroclaw</option>
					</select>
				</div>
				<div className='form-item'>
					<label htmlFor='date-pickup'>Pickup date</label>
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
					<label htmlFor='date-return'>Return date</label>
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
				<button type='submit'>Search</button>
			</form>
		</div>
	);
}
