import React from 'react';
import AdminPage from '..';
import getAllOffers from '@/services/offers/getAllOffers';
import Offer from './(offer)/Offer';

export const getServerSideProps = async () => {
	const offers = await getAllOffers();
	return {
		props: {
			offers,
		},
	};
};

export default function AdminOffersPage({ offers }) {
	return (
		<AdminPage>
			<div className='offers-container'>
				{offers.offers.map((offer) => (
					<Offer offer={offer} key={offer.id} />
				))}
			</div>
		</AdminPage>
	);
}
