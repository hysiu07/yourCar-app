import React from 'react';

export default function Header() {
	return (
		<header className='header'>
			<div className='header__container wrapper'>
				<div className='header__container__heading-container'>
					<h1 className='main-title'>
						Find, book, and rental car in <span>Easy</span> steps.
					</h1>
					<p className=''>
						Get car wherever and whenever you need it with your IOS or Android
						device.
					</p>
				</div>
				<img src='/img/header-car.png' alt='' />
			</div>
		</header>
	);
}
