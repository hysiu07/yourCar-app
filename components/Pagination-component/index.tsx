import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function PaginationComponent() {
	const router = useRouter();
	const [path, setPath] = useState<string | null>(null);
	useEffect(() => {
		switch (router.pathname) {
			case '/order': {
				setPath('vehicle');
				break;
			}
			case '/insurance': {
				setPath('insurence');
				break;
			}
			case '/equipment': {
				setPath('equipment');
				break;
			}
			case '/summary': {
				setPath('summary');
				break;
			}
		}
	}, []);
	return (
		<div className='pagination-component'>
			<div className='item'>
				<h3 className={`item__title ${path === 'order' ? 'active' : ''}`}>
					<span>1</span>Reservation
				</h3>
			</div>
			<FaArrowRight size={25} className='arrow' />
			<div className='item'>
				<h3 className={`item__title ${path === 'vehicle' ? 'active' : ''}`}>
					<span>2</span> Vehicle
				</h3>
			</div>
			<FaArrowRight size={25} className='arrow' />
			<div className='item'>
				<h3 className={`item__title ${path === 'insurance' ? 'active' : ''}`}>
					<span>3</span>Insurance
				</h3>
			</div>
			<FaArrowRight size={25} className='arrow' />
			<div className='item'>
				<h3 className={`item__title ${path === 'equipment' ? 'active' : ''}`}>
					<span>4</span> Equipment
				</h3>
			</div>
			<FaArrowRight size={25} className='arrow' />
			<div className='item'>
				<h3 className={`item__title ${path === 'summary' ? 'active' : ''}`}>
					<span>5</span> Summary
				</h3>
			</div>
		</div>
	);
}
