import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa';
import { daysNumber } from '@/services/functions/daysNumber';
import { addCar } from '../../redux/reservationinfo';

import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { ThreeDots } from 'react-loader-spinner';

export default function CardCarOrder({ offer }) {
	const router = useRouter();
	const dispatch = useDispatch();
	const differenceInDays = daysNumber(
		router.query.returDate,
		router.query.pickUpDate
	);
	const [loaderMoreInfoCar, setLoaderMoreInfoCar] = useState(false);
	const [loaderGoOn, setLoaderGoOn] = useState(false);
	return (
		<div className='car-card-order-page'>
			{offer.status === 'not available' && (
				<div className='shadow-available'>
					<p>Not available</p>
				</div>
			)}
			<div className='box-informations'>
				<div className='name-box'>
					<h4 className='title'>{offer.name[0]}</h4>
					<p className='type'>{offer.type[0]}</p>
				</div>
				<div className='btn-box'>
					{!loaderMoreInfoCar && (
						<IoIosInformationCircleOutline size={20} className='icon' />
					)}

					<Link
						href={`cars/${offer.idCar[0]}`}
						className='link'
						onClick={() => {
							setLoaderMoreInfoCar(true);
						}}
					>
						{loaderMoreInfoCar ? (
							<ThreeDots
								visible={true}
								height='30'
								width='30'
								color='#3083ff'
								radius='9'
								ariaLabel='three-dots-loading'
								wrapperStyle={{}}
								wrapperClass=''
							/>
						) : (
							'More information'
						)}
					</Link>
				</div>
			</div>
			<img src={offer.img[0]} alt='car-picture'className='img-car'/>

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

			<Link
				href='/order/insurance'
				className='btn-go-on'
				onClick={() => {
					dispatch(
						addCar(
							offer.idCar[0],
							offer.airtableId,
							Number(offer.price[0]),
							offer.name[0],
							offer.type[0],
							offer.img[0]
						)
					);
					setLoaderGoOn(true);
				}}
			>
				{loaderGoOn ? (
					<ThreeDots
						visible={true}
						height='30'
						width='30'
						color='white'
						radius='9'
						ariaLabel='three-dots-loading'
						wrapperStyle={{}}
						wrapperClass=''
					/>
				) : (
					<>
						Go on <FaArrowRight className='arrow' size={20} />
					</>
				)}
			</Link>
		</div>
	);
}
