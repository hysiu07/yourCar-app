import React, { useState } from 'react';
import AdminPage from '..';
import getAllOffers from '@/services/offers/getAllOffers';
import Offer from './(offer)/Offer';
import getAllCars from '@/services/cars/getAllCars';
import OfferAddOffer from '../components/OffersAddOffer';

export const getServerSideProps = async () => {
	const offers = await getAllOffers();
	const cars = await getAllCars();
	return {
		props: {
			offers,
			cars,
		},
	};
};

export default function AdminOffersPage({ offers, cars }) {
	const [showAddPanel, setShowAddPanel] = useState(false);


	return (
		<AdminPage>
			<button
				onClick={() => {
					setShowAddPanel(true);
				}}
			>
				Add Offer
			</button>
			{showAddPanel && (
				<OfferAddOffer cars={cars} closeAddPanel={setShowAddPanel} />
			)}

			<div className='offers-container'>
				{offers.offers.map((offer) => (
					<Offer offer={offer} key={offer.id} cars={cars} />
				))}
			</div>
		</AdminPage>
	);
}
