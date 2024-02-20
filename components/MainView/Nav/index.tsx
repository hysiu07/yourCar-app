import React, { ReactNode, useEffect, useState } from 'react';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavBtn from './NavBtn';

interface BaseLayoutProps {
	children: ReactNode;
}
export default function Nav() {
	const [scrolllY, setScrollY] = useState(false);
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const changeNavColor = () => {
		if (window.scrollY > 150) {
			setScrollY(true);
		} else {
			setScrollY(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNavColor);
		return () => {
			window.removeEventListener('scroll', changeNavColor);
		};
	}, []);
	const handlershowMenu = () => {
		setShowMenu(!showMenu);
	};
	return (
		<nav style={scrolllY ? { background: 'white' } : undefined}>
			<div className='nav-container'>
				<NavLogo />
				<NavLinks showMenu={showMenu} showMenuHandler={handlershowMenu} />
				<NavBtn showMenuHandler={handlershowMenu} />
			</div>
		</nav>
	);
}
