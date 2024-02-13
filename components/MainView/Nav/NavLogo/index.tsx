import React from 'react';
import { FaCar } from 'react-icons/fa6';
import Link from 'next/link';
export default function NavLogo() {
	return (
		<Link href='/' className='nav-logo'>
			<FaCar size={30} />
			<span className='nav-logo__title'>YourCar</span>
		</Link>
	);
}
