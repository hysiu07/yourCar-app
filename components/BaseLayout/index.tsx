import React, { ReactNode } from 'react';
import Nav from '../MainView/Nav';
import Footer from '../MainView/Footer';
import ReservationComponent from '../ReservationComponent';
// import './BaseLayout.scss';
interface BaseLayoutProps {
	children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
	return (
		<>
			<Nav />
			<ReservationComponent />
			{children}
			<Footer />
		</>
	);
}
