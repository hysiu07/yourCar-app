import React from 'react';

import { MdOutlineLocalOffer } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import PopUpAdmin from '../../components/PopUpAdmin';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Offer({ offer }) {
	const router = useRouter();
	const [showPopUp, setShowPopUp] = useState<boolean>(false);

	const handleDeleteOffer = async (payload) => {
		const response = await fetch('/api/offers/delete', {
			method: 'DELETE',
			body: JSON.stringify(payload),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			router.push('/admin/offers');
		}
	};
	return (
		<div
			className='offer'
			key={offer.id}
			style={
				offer.status === 'not available'
					? { background: '#8d7e7e80', color: 'white' }
					: { background: 'white' }
			}
		>
			{showPopUp && (
				<PopUpAdmin
					text='Do you want delete offer?'
					name={`offer id: ${offer.id}`}
					closePopUp={setShowPopUp}
					handle={() => {
						handleDeleteOffer(offer.airtableId);
					}}
				/>
			)}

			<div className='offer-info'>
				<MdOutlineLocalOffer size={20} />
				<div className='box'>
					<span className='label'>Id:</span>
					<span> {offer.id}</span>
				</div>
				<div className='box'>
					<span className='label'>Status:</span>
					<span> {offer.status}</span>
				</div>
				<div className='box'>
					<span className='label'>Location:</span>
					<span> {offer.location}</span>
				</div>
				<div className='box'>
					<span className='label'>Car:</span>
					<span> {offer.name[0]}</span>
				</div>
				<div className='box'>
					<span className='label'>Price:</span>
					<span> {offer.price[0]}</span>
				</div>
				<div className='box'>
					<span className='label'>Created:</span>
					<span> {new Date(offer.Created).toLocaleString()}</span>
				</div>
			</div>
			<div className='buttons-box'>
				<button
					onClick={() => {
						setShowPopUp(true);
						console.log(offer.airtableId);
					}}
				>
					<IoClose size={20} />
				</button>
				<button>
					<FaRegEdit size={20} />
				</button>
			</div>
		</div>
	);
}
