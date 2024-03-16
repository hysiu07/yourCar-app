import React from 'react';
import AdminPage from '..';
import getAllOffers from '@/services/offers/getAllOffers';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
export const getServerSideProps = async () => {
	const offers = await getAllOffers();
	return {
		props: {
			offers,
		},
	};
};

export default function AdminOffersPage({ offers }) {
	console.log(offers);
	return (
		<AdminPage>
			<div className='offers-container'>
				{offers.offers.map((offer) => (
					<div
						className='offer'
						key={offer.id}
						style={
							offer.status === 'not available'
								? { background: '#8d7e7e80', color: 'white' }
								: { background: 'white' }
						}
					>
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
