import React from 'react';
import Link from 'next/link';
export default function AssidePanel() {
	return (
		<div>
			<div className='asside-panel'>
				<Link href={'/admin'} className='link'>
					Dashboard
				</Link>
				<Link href={'/admin/users'} className='link'>
					Users
				</Link>
				<Link href={'/admin/offers'} className='link'>
					Offers
				</Link>
				<Link href={'/admin/cars'} className='link'>
					Cars
				</Link>
				<Link href={'/admin/orders'} className='link'>
					Orders
				</Link>
			</div>
		</div>
	);
}
