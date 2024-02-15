import React from 'react';
import { GiCarDoor } from 'react-icons/gi';
import { FaUser } from 'react-icons/fa';
import { TbManualGearbox } from 'react-icons/tb';
import { FaRegSnowflake } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';
export default function MostPopular() {
	return (
		<section className='most-popular'>
			<h2>POPULAR RENTAL DEALS</h2>
			<h3>Most popular cars rental deals</h3>
			<div className='most-popular__container'>
				<div className='car-card'>
					<div className='img'>
						<img src='./img/mercedes.jpg' alt='' />
					</div>
					<div className='text-content'>
						<h4>Car name</h4>
						<div className='information-car-box'>
							<div className='passenger box'>
								<FaUser size={25} className='icon' />
								<p>Passengers: 5</p>
							</div>
							<div className='air box'>
								<FaRegSnowflake size={25} className='icon' />
								<p>AirCondition</p>
							</div>
							<div className='gearbox box'>
								<TbManualGearbox size={25} className='icon' />
								<p>Manual</p>
							</div>
							<div className='doors box'>
								<GiCarDoor size={25} className='icon' />
								<p>Doors</p>
							</div>
						</div>
					</div>
					<div className='rent-box'>
						<p>
							<span>$1000</span>
							/day
						</p>
						<Link href={'/car'} className='link'>
							Rent Now <FaLongArrowAltRight className='arrow-icon' />
						</Link>
					</div>
				</div>
				<div className='car-card'>
					<div className='img'>
						<img src='./img/mercedes.jpg' alt='' />
					</div>
					<div className='text-content'>
						<h4>Car name</h4>
						<div className='information-car-box'>
							<div className='passenger box'>
								<FaUser size={25} className='icon' />
								<p>Passengers: 5</p>
							</div>
							<div className='air box'>
								<FaRegSnowflake size={25} className='icon' />
								<p>AirCondition</p>
							</div>
							<div className='gearbox box'>
								<TbManualGearbox size={25} className='icon' />
								<p>Manual</p>
							</div>
							<div className='doors box'>
								<GiCarDoor size={25} className='icon' />
								<p>Doors</p>
							</div>
						</div>
					</div>
					<div className='rent-box'>
						<p>
							<span>$1000</span>
							/day
						</p>
						<Link href={'/car'} className='link'>
							Rent Now <FaLongArrowAltRight className='arrow-icon' />
						</Link>
					</div>
				</div>
				<div className='car-card'>
					<div className='img'>
						<img src='./img/mercedes.jpg' alt='' />
					</div>
					<div className='text-content'>
						<h4>Car name</h4>
						<div className='information-car-box'>
							<div className='passenger box'>
								<FaUser size={25} className='icon' />
								<p>Passengers: 5</p>
							</div>
							<div className='air box'>
								<FaRegSnowflake size={25} className='icon' />
								<p>AirCondition</p>
							</div>
							<div className='gearbox box'>
								<TbManualGearbox size={25} className='icon' />
								<p>Manual</p>
							</div>
							<div className='doors box'>
								<GiCarDoor size={25} className='icon' />
								<p>Doors</p>
							</div>
						</div>
					</div>
					<div className='rent-box'>
						<p>
							<span>$1000</span>
							/day
						</p>
						<Link href={'/car'} className='link'>
							Rent Now <FaLongArrowAltRight className='arrow-icon' />
						</Link>
					</div>
				</div>
			</div>
			<Link href='/cars' className='link-show-all-vehicles'>
				Show All Vehicles <FaLongArrowAltRight className='arrow'/>
			</Link>
		</section>
	);
}
