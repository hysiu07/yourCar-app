import React, { useRef } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import AdminPage from '..';
import getAllCars from '@/services/cars/getAllCars';
import Car from './(car)/Car';
import { uploadImage } from '../../../utils/index';

interface CarPayload {
	name: FormDataEntryValue | null;
	gearbox: FormDataEntryValue | null;
	door: FormDataEntryValue | null;
	bags: FormDataEntryValue | null;
	passenger: FormDataEntryValue | null;
	type: FormDataEntryValue | null;
	price: FormDataEntryValue | null;
	img: FormDataEntryValue | null;
}

export function AddCarModal({ setShowModal, car }) {
	const [prevPicture, setPrevPicture] = useState<string>(car ? car.img : false);
	const carForm = useRef<null | any>(null);
	const router = useRouter();

	const handleImagePreview = (e) => {
		const url = window.URL.createObjectURL(e.target.files[0]);
		console.log('url', url);
		setPrevPicture(url);
	};
	const handleAddCar = async (e) => {
		e.preventDefault();
		const newCar = new FormData(carForm.current);
		let payload: CarPayload = {
			name: newCar.get('name'),
			gearbox: newCar.get('gearbox'),
			door: newCar.get('door'),
			bags: newCar.get('bags'),
			passenger: newCar.get('passenger'),
			type: newCar.get('type'),
			price: newCar.get('price'),
			img: newCar.get('picture'),
		};

		const file = await uploadImage(newCar.get('picture'));

		payload.img = file.secure_url;

		const response = await fetch('/api/cars/create', {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			router.push('/admin/cars');
			setShowModal(false);
		}
	
	};
	return (
		<div className='add-car-modal'>
			<div className='panel'>
				<button
					className='close-modal'
					onClick={()=> setShowModal(false)}
				>
					X
				</button>
				{prevPicture && <img src={prevPicture} alt='car-picture' />}

				<form ref={carForm} onSubmit={handleAddCar}>
					<label htmlFor='name'>Name Car</label>
					<input
						type='text'
						defaultValue={car ? car.name : ''}
						name='name'
						required
					/>
					<label htmlFor='price'>Price</label>
					<input
						type='number'
						name='price'
						defaultValue={car ? car.price : ''}
						required
					/>
					<label htmlFor='gearbox'>Gearbox</label>
					<select name='gearbox' defaultValue={car ? car.gearbox : ''} required>
						<option value='Automatic'>Automatic</option>
						<option value='Manual'>Manual</option>
					</select>
					<label htmlFor='door'>Doors</label>
					<select name='door' defaultValue={car ? car.door : ''} required>
						<option value='3'>3</option>
						<option value='5'>5</option>
					</select>
					<label htmlFor='bags'>Bags</label>
					<select name='bags' defaultValue={car ? car.bags : ''} required>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</select>
					<label htmlFor='passenger'>Passengers</label>
					<select
						name='passenger'
						defaultValue={car ? car.passenger : ''}
						required
					>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='7'>7</option>
						<option value='9'>9</option>
					</select>
					<label htmlFor='type'>Type</label>
					<select name='type' defaultValue={car ? car.type : ''} required>
						<option value='mini'>mini</option>
						<option value='compact'>compact</option>
						<option value='estate'>estate</option>
						<option value='suv'>suv</option>
						<option value='van'>van</option>
						<option value='special'>special</option>
					</select>
					<label htmlFor='picture'>Picture</label>
					<input
						// value={car && car.img }
						type='file'
						name='picture'
						onChange={handleImagePreview}
						required
					/>
					<button>Add Car</button>
				</form>
			</div>
		</div>
	);
}

export const getServerSideProps = async () => {
	const cars = await getAllCars();
	return {
		props: {
			cars,
		},
	};
};
export default function AdminCarsPage({ cars }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<AdminPage>
			{showModal && <AddCarModal setShowModal={setShowModal} car={null} />}

			<button
				className='add-car-btn'
				onClick={() => {
					setShowModal(true);
				}}
			>
				Add Car
			</button>
			<div className='cars-container'>
				{cars.map((car) => (
					<Car car={car}></Car>
				))}
			</div>
		</AdminPage>
	);
}
