import React from 'react';
import AdminPage from '..';
import getAllOffers from '@/services/offers/getAllOffers';
import Offer from './(offer)/Offer';
import getAllCars from '@/services/cars/getAllCars';

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
	
	return (
		<AdminPage>
			<div className='offers-container'>
				{offers.offers.map((offer) => (
					<Offer offer={offer} key={offer.id} cars={cars} />
				))}
			</div>
		</AdminPage>
	);
}
