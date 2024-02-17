import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';
import NavLogo from '../Nav/NavLogo';
import Link from 'next/link';

export default function Footer() {

	return (
		<footer className='footer'>
			<div className='informations'>
				<div className='contact-container'>
					<NavLogo color='white' />
					<p>2566 Street, Warsaw 83-22, Poland</p>
					<span className='number-phone'>
						<BsFillTelephoneFill size={15} className='phone-icon' /> +48 500 500
						500
					</span>
				</div>
				<div className='our-product-container'>
					<h4 className='title'>Our Product</h4>
					<Link href={'/career'} className='element'>
						Career
					</Link>
					<Link href={'/cars'} className='element'>
						Cars
					</Link>
					<Link href={'/features'} className='element'>
						Features
					</Link>
					<Link href={'/priceline'} className='element'>
						Priceline
					</Link>
					<Link href={'/insurance'} className='element'>
						Insurance
					</Link>
				</div>
				<div className='about-container'>
					<h4 className='title'>About Yourcar</h4>
					<Link href={'/articles/why-choose'} className='element'>
						Why choose YourCar
					</Link>
					<Link href={'/aricles/our-story'} className='element'>
						Our Story
					</Link>
					<Link href={'/aricles/investors'} className='element'>
						Investor Relations
					</Link>

					<Link href={'/aricles/advertise'} className='element'>
						Advertise
					</Link>
				</div>
				<div className='follow-us-container'>
					<h4 className='title'>Follow Us!</h4>
					<div>
						<Link href={'/'} className='link'>
							<FaFacebook size={23} className='link-icon' />
						</Link>
						<Link href={'/'} className='link'>
							<AiFillTwitterCircle size={25} className='link-icon' />
						</Link>
						<Link href={'/'} className='link'>
							<RiInstagramFill size={25} className='link-icon' />
						</Link>
						<Link href={'/'} className='link'>
							<FaYoutube size={25} className='link-icon' />
						</Link>
					</div>
				</div>
			</div>
			<hr />
			<div className='footer-copyright'>
				<p>Copyright 2024 &copy; YourCar , All Rights Reserved</p>
			</div>
		</footer>
	);
}
