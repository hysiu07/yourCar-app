import React, { useEffect, useState } from 'react';
import BaseLayout from '@/components/BaseLayout';
import { useRouter } from 'next/router';
import getCarsLocation from '@/services/cars/getCarsLocation';

import { FaArrowRight } from 'react-icons/fa';
import CardCarOrder from '@/components/CardCar-OrderPage';

export const getServerSideProps = async (context) => {
	const { query, req } = context;
	const city = query.location;

	const offers = await getCarsLocation(city);
	return {
		props: { offers },
	};
};

export default function OrderPage({ offers }: any) {
	const offersArray = offers.offers;
	const router = useRouter();

	const [sortedOffers, setSortedOffers] = useState(offersArray);
	const [sortType, setSortType] = useState<string>('allVehicles');
	const [sortBy, setSortBy] = useState();
	const [path, setPath] = useState<string | null>(null);

	const sortTypeCar = (offers, sortType) => {
		setSortType(sortType);
		const sortedOffers = offers.filter((offer) => {
			return offer.type[0] === sortType;
		});
		return sortedOffers;
	};

	const sortPrice = (offers, sortBy) => {
		if (sortBy === 'Price Hight to Low') {
			return [...offers].sort((a, b) => a.price - b.price);
		} else if (sortBy === 'Price Low to Hight') {
			return [...offers].sort((a, b) => b.price - a.price);
		} else {
			return offers;
		}
	};
	const handleSortPriceChange = (e) => {
		const newSortBy = e.target.value;
		setSortBy(newSortBy);
		const sortByPrice = sortPrice(sortedOffers, sortBy);
		setSortedOffers(sortByPrice);
	};

	useEffect(() => {
		switch (router.pathname) {
			case '/order': {
				setPath('vehicle');
				break;
			}
			case '/insurance': {
				setPath('insurence');
				break;
			}
			case '/equipment': {
				setPath('equipment');
				break;
			}
			case '/summary': {
				setPath('summary');
				break;
			}
		}
	}, []);

	function Filters() {
		return (
			<div className='filters-component'>
				<div className='filters'>
					<div
						className={`filter ${sortType === 'allVehicles' ? 'active' : ''}`}
						onClick={() => {
							setSortedOffers(offersArray);
							setSortType('allVehicles');
						}}
					>
						<p className='name'>All Vehicles</p>
					</div>
					<div
						className={`filter ${sortType === 'mini' ? 'active' : ''}`}
						onClick={() => {
							setSortedOffers(sortTypeCar(offersArray, 'mini'));
						}}
					>
						<p className='name'>Mini</p>
					</div>
					<div
						className={`filter ${sortType === 'compact' ? 'active' : ''}`}
						onClick={() => {
							setSortedOffers(sortTypeCar(offersArray, 'compact'));
						}}
					>
						<p className='name'>Compact</p>
					</div>
					<div
						className={`filter ${sortType === 'van' ? 'active' : ''}`}
						onClick={() => {
							setSortedOffers(sortTypeCar(offersArray, 'van'));
						}}
					>
						<p className='name'>Van</p>
					</div>
					<div
						className={`filter ${sortType === 'suv' ? 'active' : ''}`}
						onClick={() => {
							setSortedOffers(sortTypeCar(offersArray, 'suv'));
						}}
					>
						<p className='name'>Suv</p>
					</div>
					<div
						className={`filter ${sortType === 'estate' ? 'active' : ''}`}
						onClick={() => {
							setSortedOffers(sortTypeCar(offersArray, 'estate'));
						}}
					>
						<p className='name'>Estate</p>
					</div>
					<div
						className={`filter ${sortType === 'special' ? 'active' : ''}`}
						onClick={() => {
							setSortedOffers(sortTypeCar(offersArray, 'special'));
						}}
					>
						<p className='name'>Special</p>
					</div>
				</div>
				<div className='sort-btn'>
					<select
						name='sort-car'
						onChange={handleSortPriceChange}
						value={sortBy}
					>
						<option value=''>Sort</option>
						<option value='Price Low to Hight'>Price Low-to-High</option>
						<option value='Price Hight to Low'>Price High-to-Low</option>
					</select>
				</div>
			</div>
		);
	}

	return (
		<BaseLayout>
			<section className='order-page'>
				<div className='pagination-component'>
					<div className='item'>
						<h3 className={`item__title ${path === 'order' ? 'active' : ''}`}>
							<span>1</span>Reservation
						</h3>
					</div>
					<FaArrowRight size={25} className='arrow' />
					<div className='item'>
						<h3 className={`item__title ${path === 'vehicle' ? 'active' : ''}`}>
							<span>2</span> Vehicle
						</h3>
					</div>
					<FaArrowRight size={25} className='arrow' />
					<div className='item'>
						<h3
							className={`item__title ${path === 'insurance' ? 'active' : ''}`}
						>
							<span>3</span>Insurance
						</h3>
					</div>
					<FaArrowRight size={25} className='arrow' />
					<div className='item'>
						<h3
							className={`item__title ${path === 'equipment' ? 'active' : ''}`}
						>
							<span>4</span> Equipment
						</h3>
					</div>
					<FaArrowRight size={25} className='arrow' />
					<div className='item'>
						<h3 className={`item__title ${path === 'summary' ? 'active' : ''}`}>
							<span>5</span> Summary
						</h3>
					</div>
				</div>
				<Filters />
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
