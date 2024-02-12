import React, { ReactNode } from 'react';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavBtn from './NavBtn';

interface BaseLayoutProps {
	children: ReactNode;
}
export default function Nav() {
	return (
		<nav>
			<div className='nav-container'>
				<NavLogo />
				<NavLinks />
				<NavBtn />
			</div>
		</nav>
	);
}
