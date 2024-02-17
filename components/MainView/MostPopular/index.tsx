import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';
import CarCard from '@/components/CardCar';
export default function MostPopular() {
	return (
		<section className='most-popular'>
			<h2>POPULAR RENTAL DEALS</h2>
			<h3>Most popular cars rental deals</h3>
			<div className='most-popular__container'>
				<CarCard />
				<CarCard />
				<CarCard />
			</div>
			<Link href='/cars' className='link-show-all-vehicles'>
				Show All Vehicles <FaLongArrowAltRight className='arrow' />
			</Link>
		</section>
	);
}
