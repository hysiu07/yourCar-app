import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useDispatch } from 'react-redux';
import { addCityandDate } from '@/redux/reservationinfo';

import getCarsLocation from '@/services/cars/getCarsLocation';
import { daysNumber } from '@/services/functions/daysNumber';

import BaseLayout from '@/components/BaseLayout';
import CardCarOrder from '@/components/CardCar-OrderPage';
import Filters from '@/components/Filters';
import PaginationComponent from '@/components/Pagination-component';


export const getServerSideProps = async (context) => {
	const { query } = context;
	const city = query.location;

	const offers = await getCarsLocation(city);
	return {
		props: { offers },
	};
};

export default function OrderPage({ offers }: any) {
	const offersArray = offers.offers;
	const router = useRouter();
	const dispatch = useDispatch();

	const [sortedOffers, setSortedOffers] = useState(offersArray);

	useEffect(() => {
		const differenceInDays = daysNumber(
			router.query.returDate,
			router.query.pickUpDate
		);
		dispatch(
			addCityandDate(
				router.query.location,
				router.query.pickUpDate,
				router.query.returDate,
				differenceInDays
			)
		);
	}, []);

	return (
		<BaseLayout>
			<section className='order-page'>
				<PaginationComponent />
				<Filters
					setSortedOffers={setSortedOffers}
					sortedOffers={sortedOffers}
					offersArray={offersArray}
				/>
				<div className='cars__container'>
					{sortedOffers.length === 0 ? (
						<p>No matching cars found.</p>
					) : (
						sortedOffers.map((offer) => (
							<CardCarOrder offer={offer} key={offer.id} />
						))
					)}
				</div>
			</section>
		</BaseLayout>
	);
}
