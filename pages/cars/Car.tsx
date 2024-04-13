import React, { useState } from 'react';
import Link from 'next/link';
import { ThreeDots } from 'react-loader-spinner';
export default function Car({ car }) {
	const [loader, setLoader] = useState(false);
	return (
		<div className='card-cars-page' key={car.id}>
			<div className='card-cars-page__title'>
				<h4 className='car-name'>{car.name}</h4>
				<h5 className='car-type'>{car.type}</h5>
			</div>
			<img src={car.img} alt='car-img' />
			<hr />

			<div className='card-cars-page__price-box'>
				<p className='text'>Price for day:</p>
				<p className='price'>{car.price} $</p>
			</div>
			<div className='card-cars-page__details'>
				<Link
					href={`/cars/${car.id}`}
					className='link'
					onClick={() => {
						setLoader(true);
					}}
				>
					{loader ? (
						<ThreeDots
							visible={true}
							height='25'
							width='30'
							color='#3083ff'
							radius='9'
							ariaLabel='three-dots-loading'
							wrapperStyle={{}}
							wrapperClass=''
						/>
					) : (
						'DETAILS'
					)}
				</Link>
			</div>
		</div>
	);
}
