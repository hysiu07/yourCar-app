import React, { useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';
import CarCard from '@/components/CardCar-MainView';
import { ThreeDots } from 'react-loader-spinner';

export default function MostPopular({ specialCars }) {
	const [loader, setLoader] = useState(false);
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
			{loader ? (
				<Link
					href='/cars'
					className='link-show-all-vehicles'
					style={loader && { border: 'none' }}
				>
					<ThreeDots
						visible={true}
						height='35'
						width='35'
						color='#1d1e21'
						radius='9'
						ariaLabel='three-dots-loading'
						wrapperStyle={{}}
						wrapperClass=''
					/>
				</Link>
			) : (
				<Link
					href='/cars'
					className='link-show-all-vehicles'
					onClick={() => {
						setLoader(true);
					}}
				>
					Show All Vehicles <FaLongArrowAltRight className='arrow' />
				</Link>
			)}
		</section>
	);
}
