import React from 'react';
import { FaCar } from 'react-icons/fa6';
import Link from 'next/link';
export default function NavLogo({ color }: any) {
	return (
		<Link href='/' className='nav-logo'>
			<FaCar size={30} color={color} />
			<span className='nav-logo__title' style={{ color: color }}>
				YourCar
			</span>
		</Link>
	);
}
