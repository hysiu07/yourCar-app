import React, { useEffect, useState } from 'react';
import BaseLayout from '@/components/BaseLayout';
import { useRouter } from 'next/router';
import getCarsLocation from '@/services/cars/getCarsLocation';
import { daysNumber } from '@/services/functions/daysNumber';

import CardCarOrder from '@/components/CardCar-OrderPage';

import { useDispatch } from 'react-redux';
import { addCarAndDate } from '@/redux/reservationinfo';
import dynamic from 'next/dynamic';
import Filters from '@/components/Filters';
import PaginationComponent from '@/components/Pagination-component';

const ReservationComponent = dynamic(
	() => import('@/components/ReservationComponent'),
	{
		ssr: false, // Wyłączanie renderowania po stronie serwera
	}
);

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
			addCarAndDate(
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
			<ReservationComponent />
		</BaseLayout>
	);
}
