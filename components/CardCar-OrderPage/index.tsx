import React from 'react';
import { useRouter } from 'next/router';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa';
import { daysNumber } from '@/services/functions/daysNumber';
import { addCar } from '../../redux/reservationinfo';

import Link from 'next/link';
import { useDispatch } from 'react-redux';

export default function CardCarOrder({ offer }) {
	const router = useRouter();
	const dispatch = useDispatch();
	const differenceInDays = daysNumber(
		router.query.returDate,
		router.query.pickUpDate
	);

	return (
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
				<h4>
					{differenceInDays ? differenceInDays * offer.price[0] : null}$ / Sum
				</h4>
			</div>
			{/* <button className='btn-go-on'>
				Go on <FaArrowRight className='arrow' size={20} />
			</button> */}
			<Link
				href='/order/insurance'
				className='btn-go-on'
				onClick={() => {
					console.log(offer.id);
					dispatch(addCar(offer.idCar[0], offer.id, Number(offer.price[0])));
				}}
			>
				Go on
				<FaArrowRight className='arrow' size={20} />
			</Link>
		</div>
	);
}
