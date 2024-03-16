import React from 'react';
import { useState } from 'react';
import AdminPage from '..';
import getAllCars from '@/services/cars/getAllCars';
import { FaRegUser } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';

export function AddCarModal({ hideModal }) {
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
				<form>
					<label htmlFor=''>Name Car</label>
					<input type='text' />
					<label htmlFor=''>Price</label>
					<input type='text' />
					<label htmlFor=''>Gearbox</label>
					<select name='gearbox' id=''>
						<option value='Automatic'>Automatic</option>
						<option value='Manual'>Manual</option>
					</select>
					<label htmlFor=''>Doors</label>
					<select name='door' id=''>
						<option value='3'>3</option>
						<option value='5'>5</option>
					</select>
					<label htmlFor=''>Bags</label>
					<select name='bags' id=''>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</select>
					<label htmlFor=''>Passengers</label>
					<select name='passenger' id=''>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='7'>7</option>
						<option value='9'>9</option>
					</select>
					<label htmlFor=''>Type</label>
					<select name='type' id=''>
						<option value='mini'>mini</option>
						<option value='compact'>compact</option>
						<option value='estate'>estate</option>
						<option value='suv'>suv</option>
						<option value='van'>van</option>
						<option value='special'>special</option>
					</select>
					<input type='file' />
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
	console.log(cars);
	return (
		<AdminPage>
			{showModal && <AddCarModal hideModal={setShowModal} />}

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
					<div className='car'>
						<div className='car-info'>
							<img src={car.img} alt='car-img' />
							<div className='box'>
								<span className='label'>Id:</span>
								<span>{car.id}</span>
							</div>
							<div className='box'>
								<span className='label'>Name:</span>
								<span>{car.name}</span>
							</div>
							<div className='box'>
								<span className='label'>Type:</span>
								<span>{car.type[0]}</span>
							</div>
							<div className='box'>
								<span className='label'>Price:</span>
								<span>{car.price}</span>
							</div>
							<div className='box'>
								<span className='label'>Price:</span>
								<span>{car.price}</span>
							</div>
							<div className='box'>
								<span className='label'>Passengers:</span>
								<span>{car.passenger}</span>
							</div>
							<div className='box'>
								<span className='label'>Gearbox:</span>
								<span>{car.gearbox}</span>
							</div>
							<div className='box'>
								<span className='label'>Door:</span>
								<span>{car.door}</span>
							</div>
							<div className='box'>
								<span className='label'>Bags:</span>
								<span>{car.bags}</span>
							</div>
						</div>
						<div className='buttons-box'>
							<button>
								<IoClose size={20} />
							</button>
							<button>
								<FaRegEdit size={20} />
							</button>
							{/* <button>
										<IoIosArrowDropdown size={20} />
									</button> */}
						</div>
					</div>
				))}
			</div>
		</AdminPage>
	);
}
