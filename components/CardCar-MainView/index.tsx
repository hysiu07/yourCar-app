import React from 'react';
import { GiCarDoor } from 'react-icons/gi';
import { FaUser } from 'react-icons/fa';
import { TbManualGearbox } from 'react-icons/tb';
import { FaRegSnowflake } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';


export default function CarCard({
	name,
	passenger,
	img,
	gearbox,
	doors,
	price,
	id,
}) {
	return (
		<div className='car-card'>
			<div className='img'>
				<img src={img} alt='car-picture' />
			</div>
			<div className='text-content'>
				<h4>{name}</h4>
				<div className='information-car-box'>
					<div className='passenger box'>
						<FaUser size={25} className='icon' />
						<p>Passengers: {passenger}</p>
					</div>
					<div className='air box'>
						<FaRegSnowflake size={25} className='icon' />
						<p>AirCondition</p>
					</div>
					<div className='gearbox box'>
						<TbManualGearbox size={25} className='icon' />
						<p>{gearbox}</p>
					</div>
					<div className='doors box'>
						<GiCarDoor size={25} className='icon' />
						<p> Doors: {doors}</p>
					</div>
				</div>
			</div>
			<div className='rent-box'>
				<p>
					<span>$ {price}</span>
					/day
				</p>
				<Link href={`/cars/${id}`} className='link'>
					Show more <FaLongArrowAltRight className='arrow-icon' />
				</Link>
			</div>
		</div>
	);
}
