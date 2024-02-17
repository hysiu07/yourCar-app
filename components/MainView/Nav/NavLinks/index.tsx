import React from 'react';
import Link from 'next/link';

type NavLinkPropsType = {
	showMenu: boolean;
};
export default function NavLinks({ showMenu }: NavLinkPropsType) {
	return (
		<div className='nav-links' style={showMenu ? { right: 0 } : undefined}>
			<a href='#'>Become a rent</a>
			<a href='#'>Rental deals</a>
			<a href='#how-work'>How it work?</a>
			<a href='#'>Why choose us</a>
			<span className='decor-line'></span>
			<Link className='sign-in-link' href='/signin'>
				Login
			</Link>
		</div>
	);
}
