import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import { AddCarModal } from '..';
export default function Car({ car }) {
	const [showEditModal, setShowEditModal] = useState(false);
	return (
		<div className='car'>
			{showEditModal && <AddCarModal car={car} hideModal={setShowEditModal} />}
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
				{/* <button>
					<IoClose size={20} />
				</button> */}
				<button
					onClick={() => {
						setShowEditModal(true);
					}}
				>
					<FaRegEdit size={20} />
				</button>
				{/* <button>
										<IoIosArrowDropdown size={20} />
									</button> */}
			</div>
		</div>
	);
}
