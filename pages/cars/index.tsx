import BaseLayout from '@/components/BaseLayout';
import getAllCars from '@/services/cars/getAllCars';
import React from 'react';
import Link from 'next/link';

export const getStaticProps = async () => {
	const cars = await getAllCars();
	return {
		props: {
			cars: cars,
		},
	};
};
export default function CarsPage({ cars }: any) {
	return (
		<BaseLayout>
			<section className='cars-page'>
				{cars.map((car: any) => {
					return (
						<div className='card-cars-page'>
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
								<Link href={`/cars/${car.id}`} className='link'>
									DETAILS
								</Link>
							</div>
						</div>
					);
				})}
			</section>
		</BaseLayout>
	);
}
