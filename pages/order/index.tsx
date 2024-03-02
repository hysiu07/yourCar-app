import React, { useEffect, useState } from 'react';
import BaseLayout from '@/components/BaseLayout';
import { useRouter } from 'next/router';
import getCarsLocation from '@/services/cars/getCarsLocation';
import CarCard from '@/components/CardCar-CarsPage';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import Link from 'next/link';

export const getServerSideProps = async (context) => {
	const { query, req } = context;
	const city = query.location;

	const offers = await getCarsLocation(city);
	return {
		props: { offers },
	};
};

export default function OrderPage({ offers }: any) {
	const router = useRouter();
	
	const returDate = new Date (router.query.returDate)
	const pickUpDate = router.query.pickUpDate;
	const location = router.query.location;
	const numberDays = returDate - pickUpDate;

	const [path, setPath] = useState<string | null>(null);
	const offersArray = offers.offers;
	console.log(offersArray);
	useEffect(() => {
		switch (router.pathname) {
			case '/order': {
				setPath('vehicle');
			}
			case '/insurance': {
				setPath('insurence');
			}
			case '/equipment': {
				setPath('equipment');
			}
			case '/summary': {
				setPath('summary');
			}
		}
	}, []);

	return (
		<BaseLayout>
			<section className='order-page'>
				<div className='pagination-component'>
					<div className='item'>
						<h3 className={`item__title ${path === 'vehicle' ? 'active' : ''}`}>
							Reservation
						</h3>
					</div>
					<FaArrowRight size={25} />
					<div className='item'>
						<h3 className='item__title'>Vehicle</h3>
					</div>
					<FaArrowRight size={25} />
					<div className='item'>
						<h3 className='item__title'>Insurance</h3>
					</div>
					<FaArrowRight size={25} />
					<div className='item'>
						<h3 className='item__title'>Equipment</h3>
					</div>
					<FaArrowRight size={25} />
					<div className='item'>
						<h3 className='item__title'>Summary</h3>
					</div>
				</div>

				{/* {offersArray.map((offer) => {
					console.log(offer.name[0]);

					return <p>{offer.name[0]}</p>;
				})} */}
				<div className='cars__container'>
					{offersArray.map((offer) => (
						<div className='car-card-order-page'>
							<div className='box-informations'>
								<div className='name-box'>
									<h4 className='title'>{offer.name[0]}</h4>
									<p className='type'>{offer.type[0]}</p>
								</div>
								<div className='btn-box'>
									<IoIosInformationCircleOutline size={20} className='icon' />
									<Link href={`cars/${offer.idCar[0]}`} className='link'>
										More informations
									</Link>
								</div>
							</div>
							<img src={offer.img[0]} alt='' />

							<div className='amount-info-box'>
								<div className='color-box'>
									<p>Day Amount</p>
								</div>
								<h4>{offer.price[0]} $ / Day</h4>
							</div>
							<hr />
							<div className='amount-info-box'>
								<div className='color-box'>
									<p>Sum Amount</p>
								</div>
								<h4>200 $ / Sum</h4>
							</div>
							<button className='btn-go-on'>
								Go on <FaArrowRight className='arrow' size={20} />
							</button>
						</div>
					))}
				</div>
			</section>
		</BaseLayout>
	);
}
