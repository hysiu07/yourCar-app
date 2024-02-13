import React from 'react';
import Link from 'next/link';
export default function NavLinks() {
	return (
		<div className='nav-links'>
			<a href='#'>Become a rent</a>
			<a href='#'>Rental deals</a>
			<a href='#'>How it work?</a>
			<a href='#'>Why choose us</a>
			<span className='decor-line'></span>
			<Link  className='sign-in-link' href='/signin'>Login</Link>
		</div>
	);
}
