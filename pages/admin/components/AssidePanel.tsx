import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function AssidePanel() {
	const router = useRouter();
	return (
		<div>
			<div className='asside-panel'>
				<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}`} className='link'>
					Home
				</Link>
				<Link
					href={'/admin/users'}
					className={`link ${
						router.pathname === '/admin/users' ? 'border' : ''
					}`}
				>
					Users
				</Link>
				<Link
					href={'/admin/offers'}
					className={`link ${
						router.pathname === '/admin/offers' ? 'border' : ''
					}`}
				>
					Offers
				</Link>
				<Link
					href={'/admin/cars'}
					className={`link ${
						router.pathname === '/admin/cars' ? 'border' : ''
					}`}
				>
					Cars
				</Link>
				<Link
					href={'/admin/orders'}
					className={`link ${
						router.pathname === '/admin/orders' ? 'border' : ''
					}`}
				>
					Orders
				</Link>
			</div>
		</div>
	);
}
