import React from 'react';
import BaseLayout from '@/components/BaseLayout';
import { useRouter } from 'next/router';

export default function OrderPage() {
	const router = useRouter();
	console.log(router.query);
	return (
		<BaseLayout>
			<section className='order-page'>OrderPage</section>
		</BaseLayout>
	);
}
