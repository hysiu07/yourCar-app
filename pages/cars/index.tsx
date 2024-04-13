import React, { useState } from 'react';
import BaseLayout from '@/components/BaseLayout';
import getAllCars from '@/services/cars/getAllCars';
import Car from '../cars/Car';
export const getStaticProps = async () => {
	const cars = await getAllCars();
	return {
		props: {
			cars: cars,
		},
	};
};
export default function CarsPage({ cars }) {
	return (
		<BaseLayout>
			<section className='cars-page'>
				{cars.map((car: any) => {
					return <Car car={car} />;
				})}
			</section>
		</BaseLayout>
	);
}
