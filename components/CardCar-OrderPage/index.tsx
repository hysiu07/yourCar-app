import React from 'react';
import { useRouter } from 'next/router';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
export default function CardCarOrder({ offer }) {
	const router = useRouter();

	const returnDateQuery = router.query.returDate;
	let returnDate: Date | null = null;
	if (returnDateQuery) {
		if (Array.isArray(returnDateQuery)) {
			returnDate = new Date(returnDateQuery[0]);
		} else {
			returnDate = new Date(returnDateQuery);
		}
	}

	const pickUpDateQuery = router.query.pickUpDate;
	let pickUpDate: Date | null = null;
	if (pickUpDateQuery) {
		if (Array.isArray(pickUpDateQuery)) {
			pickUpDate = new Date(pickUpDateQuery[0]);
		} else {
			pickUpDate = new Date(pickUpDateQuery);
		}
	}

	const differenceInDays =
		returnDate && pickUpDate
			? Math.floor(
					(returnDate.getTime() - pickUpDate.getTime()) / (1000 * 3600 * 24)
			  )
			: null;

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
			<button className='btn-go-on'>
				Go on <FaArrowRight className='arrow' size={20} />
			</button>
		</div>
	);
}