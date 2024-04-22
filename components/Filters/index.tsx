import React from 'react';
import { useState } from 'react';

export default function Filters({
	setSortedOffers,
	sortedOffers,
	offersArray,
}) {
	const [sortType, setSortType] = useState<string>('allVehicles');
	const [sortBy, setSortBy] = useState('Price Low to Hight');

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
				<select name='sort-car' onChange={handleSortPriceChange} value={sortBy}>
					{/* <option value='Price Low to Hight'>Sort</option> */}
					<option value='Price Low to Hight'>Price Low-to-High</option>
					<option value='Price Hight to Low'>Price High-to-Low</option>
				</select>
			</div>
		</div>
	);
}
