import getAllCars from '@/services/cars/getAllCars';
import getCar from '@/services/cars/getCar';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import { GiCarDoor } from 'react-icons/gi';
import { FaUser } from 'react-icons/fa';
import { TbManualGearbox } from 'react-icons/tb';
import { FaRegSnowflake } from 'react-icons/fa';
import { GiConfirmed } from 'react-icons/gi';
import { FaSuitcase } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

export const getStaticPaths = async () => {
	const cars = await getAllCars();
	const paths = cars?.map((car) => ({ params: { id: String(car.id) } }));

	return {
		paths,
		fallback: true,
	};
};
export const getStaticProps = async ({ params }) => {
	const car = await getCar(params.id);
	return {
		props: {
			car,
		},
	};
};

export default function CarPage({ car }) {
	const router = useRouter();

	return (
		<div className='car-page'>
			<div className='car-page__body'>
				<div className='car-info-box'>
					<h4 className='car-name'>{car.name}</h4>
					<Link href={'/cars'} className='link-back-to-cars'>
						<AiOutlineClose size={20}/>
					</Link>
				</div>
				<img src={car.img} alt='car-img' />

				<hr />
				<div className='informations'>
					<div className='container'>
						<h4> Informations about car:</h4>
						<div className='passenger box'>
							<FaUser size={25} className='icon' />
							<p>Passengers: {car.passenger}</p>
						</div>
						<div className='air box'>
							<FaRegSnowflake size={25} className='icon' />
							<p>AirCondition</p>
						</div>
						<div className='gearbox box'>
							<TbManualGearbox size={25} className='icon' />
							<p>{car.gearbox}</p>
						</div>
						<div className='doors box'>
							<GiCarDoor size={25} className='icon' />
							<p>Doors {car.door}</p>
						</div>
						<div className='bag box'>
							<FaSuitcase size={25} className='icon' />
							<p>Bag {car.bags}</p>
						</div>
					</div>
					<div className='container'>
						<h4> Price Includes:</h4>
						<div className='box'>
							<GiConfirmed size={25} className='icon confirm' />
							<p>CDW</p>
						</div>
						<div className=' box'>
							<GiConfirmed size={25} className='icon confirm' />
							<p>Unlimited mileage</p>
						</div>
						<div className='box'>
							<GiConfirmed size={25} className='icon confirm' />
							<p>Free cancellation</p>
						</div>
						<div className='box'>
							<GiConfirmed size={25} className='icon confirm' />
							<p>TAX 25%</p>
						</div>
					</div>
				</div>
				<hr />
				<div className='car-price-box'>
					<p className='price-text'>Amount:</p>
					<p className='price'>{car.price} $ / per Day</p>
				</div>
			</div>
		</div>
	);
}
