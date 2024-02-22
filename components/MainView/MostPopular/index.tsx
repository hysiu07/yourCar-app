import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';
import CarCard from '@/components/CardCar-MainView';

export default function MostPopular({ specialCars }) {
	return (
		<section className='most-popular' id='most-popular'>
			<h2>POPULAR RENTAL DEALS</h2>
			<h3>Most popular cars rental deals</h3>
			<div className='most-popular__container'>
				{specialCars.map((car) => {
					return (
						<CarCard
							name={car.name}
							passenger={car.passenger}
							img={car.img}
							gearbox={car.gearbox}
							doors={car.door}
							price={car.price}
							id={car.id}
							key={car.id}
						/>
					);
				})}
			</div>
			<Link href='/cars' className='link-show-all-vehicles'>
				Show All Vehicles <FaLongArrowAltRight className='arrow' />
			</Link>
		</section>
	);
}
