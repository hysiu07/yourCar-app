import React from 'react';
import { useState } from 'react';
import AdminPage from '..';
import getAllCars from '@/services/cars/getAllCars';
import Car from './(car)/Car';
export function AddCarModal({ hideModal, car }) {
	const [prevPicture, setPrevPicture] = useState<string>(car.img);
	
	const handleImagePreview = (e) => {
		const url = window.URL.createObjectURL(e.target.files[0]);
		console.log('url', url);
		setPrevPicture(url);
	};
	return (
		<div className='add-car-modal'>
			<div className='panel'>
				<button
					className='close-modal'
					onClick={() => {
						hideModal(false);
					}}
				>
					X
				</button>
				{car && <img src={prevPicture} alt='car-picture' />}
				<form>
					<label htmlFor='name'>Name Car</label>
					<input type='text' defaultValue={car ? car.name : ''} name='name' />
					<label htmlFor='price'>Price</label>
					<input
						type='number'
						name='price'
						defaultValue={car ? car.price : ''}
					/>
					<label htmlFor='gearbox'>Gearbox</label>
					<select name='gearbox' defaultValue={car ? car.gearbox : ''}>
						<option value='Automatic'>Automatic</option>
						<option value='Manual'>Manual</option>
					</select>
					<label htmlFor='door'>Doors</label>
					<select name='door' defaultValue={car ? car.door : ''}>
						<option value='3'>3</option>
						<option value='5'>5</option>
					</select>
					<label htmlFor='bags'>Bags</label>
					<select name='bags' defaultValue={car ? car.bags : ''}>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</select>
					<label htmlFor='passenger'>Passengers</label>
					<select name='passenger' defaultValue={car ? car.passenger : ''}>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='7'>7</option>
						<option value='9'>9</option>
					</select>
					<label htmlFor='type'>Type</label>
					<select name='type' defaultValue={car ? car.type : ''}>
						<option value='mini'>mini</option>
						<option value='compact'>compact</option>
						<option value='estate'>estate</option>
						<option value='suv'>suv</option>
						<option value='van'>van</option>
						<option value='special'>special</option>
					</select>
					<label htmlFor='picture'>Picture</label>
					<input type='file' name='picture' onChange={handleImagePreview} />
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
			{showModal && <AddCarModal hideModal={setShowModal} car={null} />}

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
