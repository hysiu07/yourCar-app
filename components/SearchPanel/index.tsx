import React, { useEffect } from 'react';

import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { ThreeDots } from 'react-loader-spinner';
interface Payload {
	location: string;
	pickUpDate: string;
	returDate: string;
}
export default function SearchPanel() {
	const router = useRouter();
	const orderForm = useRef<null | any>(null);
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	const [tomorrowDate, setTomorrowDate] = useState<Date | null>();
	const [error, setError] = useState<null | string>(null);
	const [showLoader, setShowLoader] = useState(false);
	useEffect(() => {
		const tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		setTomorrowDate(tomorrow);
	}, []);

	const handleSearchCar = async (e) => {
		e.preventDefault();
		const form = new FormData(orderForm.current);
		const payload: Payload = {
			location: form.get('location') as string,
			pickUpDate: form.get('pickup-date') as string,
			returDate: form.get('return-date') as string,
		};

		if (
			payload.pickUpDate > payload.returDate ||
			payload.pickUpDate < selectedDate.toISOString().split('T')[0]
		) {
			setError('Fail Date. Please correct your date!');
			return;
		} else {
			setError(null);
		}
		if (payload.location && payload.pickUpDate && payload.returDate) {
			setShowLoader(true);
			router.push({
				pathname: '/order/',
				query: {
					location: payload.location.toString(),
					pickUpDate: payload.pickUpDate.toString(),
					returDate: payload.returDate.toString(),
				},
			});
		}
	};

	return (
		<div className='search-panel'>
			<form ref={orderForm} onSubmit={handleSearchCar}>
				<div className='form-item'>
					<label htmlFor='location'>Location:</label>
					<select name='location' id=''>
						Select your location
						<option value='krakow'>Krakow</option>
						<option value='warsaw'>Warsaw</option>
						<option value='poznan'>Poznan</option>
						<option value='gdansk'>Gdansk</option>
						<option value='wroclaw'>Wroclaw</option>
						<option value='szczecin'>Szczecin</option>
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
				<button type='submit'>
					{showLoader ? (
						<ThreeDots
							visible={true}
							height='35'
							width='40'
							color='white'
							radius='9'
							ariaLabel='three-dots-loading'
							wrapperStyle={{}}
							wrapperClass=''
						/>
					) : (
						'Search!'
					)}
				</button>
			</form>
			<p className='error'>{error}</p>
		</div>
	);
}
