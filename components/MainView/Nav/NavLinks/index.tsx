import React, { useEffect } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useRouter } from 'next/router';
type NavLinkPropsType = {
	showMenu: boolean;
	showMenuHandler: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function NavLinks({
	showMenu,
	showMenuHandler,
}: NavLinkPropsType) {
	const router = useRouter();
	const [showLinks, setShowLinks] = useState<boolean>(true);
	useEffect(() => {
		if (router.pathname !== '/') {
			setShowLinks(false);
		}
	}, []);

	return (
		<div className='nav-links' style={showMenu ? { right: 0 } : undefined}>
			<Link href={'/'}>Home</Link>
			<Link href={'/cars'}>Cars</Link>
			{showLinks && (
				<>
					<a href='#most-popular'>Rental deals</a>
					<a href='#how-work'>How it work?</a>
					<a href='#why-us'>Why choose us</a>
				</>
			)}

			<span className='decor-line'></span>
			<Link className='sign-in-link' href='/signin'>
				Login
			</Link>

			<button
				className='close-btn'
				onClick={() => {
					showMenuHandler(false);
				}}
			>
				<IoClose size={30} />
			</button>
		</div>
	);
}
