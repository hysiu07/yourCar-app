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
			<div className='car-page__header'>
				<div className='car-info'>
					<h4 className='car-name'>{car.name}</h4>
					<h4 className='car-type'>{car.type}</h4>
				</div>
				<Link href={'/cars'}>X</Link>
			</div>
			<div className='car-page__body'>
				<img src={car.img} alt='car-img' />
				<h4 className='car-name'>{car.name}</h4>
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
						<div className='bag box'>
							<GiConfirmed size={25} className='icon confirm' />
							<p>
								CDW (Collision Damage Waiver)/TP (Theft Protection) - Reduced
								liability for damage or theft
							</p>
						</div>
						<div className='bag box'>
							<GiConfirmed size={25} className='icon confirm' />
							<p>Unlimited mileage</p>
						</div>
						<div className='bag box'>
							<GiConfirmed size={25} className='icon confirm' />
							<p>Free cancellation</p>
						</div>
						<div className='bag box'>
							<GiConfirmed size={25} className='icon confirm' />
							<p>TAX 25%</p>
						</div>
					</div>
				</div>
				<hr />
				<div className='car-price-box'>
					<p className='price-text'>Amount:</p>
					<p className='price'>{car.price}</p>
				</div>
			</div>
		</div>
	);
}
