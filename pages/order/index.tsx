import React from 'react';
import BaseLayout from '@/components/BaseLayout';
import { useRouter } from 'next/router';
import getCarsLocation from '@/services/cars/getCarsLocation';
import CarCard from '@/components/CardCar-CarsPage';

export const getServerSideProps = async (context) => {
	const { query, req } = context;
	const city = query.location
	
	const offers = await getCarsLocation(city);
	return {
		props: { offers },
	};
};

export default function OrderPage({ offers }) {
	const router = useRouter();
	console.log(offers);
	return (
		<BaseLayout>
			<section className='order-page'>
				{offers.map((offer) => {
					return <CarCard />
				})}
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique
					eum, iure ea ratione molestiae, sapiente natus necessitatibus placeat
					ullam ex rem et quaerat dolorem unde maxime recusandae ad pariatur
					voluptas. Ex rerum obcaecati voluptatibus porro perferendis
					repudiandae adipisci corrupti veritatis dicta vero deleniti, explicabo
					tenetur asperiores eligendi, odio voluptatem.
				</div>
			</section>
		</BaseLayout>
	);
}
