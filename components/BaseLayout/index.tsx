import React, { ReactNode } from 'react';
import Nav from '../MainView/Nav';
import Footer from '../MainView/Footer';
// import './BaseLayout.scss';
interface BaseLayoutProps {
	children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
	return (
		<>
			<Nav />
			{children}
			<Footer />
		</>
	);
}
