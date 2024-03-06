import BaseLayout from '@/components/BaseLayout';
import PaginationComponent from '@/components/Pagination-component';
import React from 'react';
import { useSelector } from 'react-redux';
import store from '@/redux/store';
import { IoShieldOutline } from 'react-icons/io5';
import { IoShieldHalfSharp } from 'react-icons/io5';
import { IoShieldSharp } from 'react-icons/io5';
const InsuranceCard = ({
	icon,
	price,
	deposit,
	name,
	CDW,
	CDWplus,
	SCDW,
	WUG,
}) => {
	return (
		<div className='insurance-card'>
			<div className='icon'>{icon}</div>
			<h4 className='name'>{name}</h4>
			<span className='price'>Price : {price} USD</span>

			<span className='deposit'>Deposit : {deposit} USD</span>
			{CDW && (
				<span>
					CDW (AC)/TP (Theft protection) - Reduced liability for damage or theft
				</span>
			)}

			{CDWplus && <span>CDW+ - Insurance coverage with reduced excess</span>}

			{SCDW && (
				<span>
					SCDW - Full coverage of own contribution in case of vehicle
					damage/injuries
				</span>
			)}
			{WUG && (
				<span>
					WUG (Wheels, Undercarriage, Glass) - Protection for wheels,
					undercarriage, and glass
				</span>
			)}

			<span>Unlimited mileage</span>
		</div>
	);
};

export default function InsuracnePage() {
	console.log(store.getState());
	return (
		<BaseLayout>
			<PaginationComponent />
			<div className='insurance-container'>
				<h3>Insurance Package</h3>
				<div className='insurance-packages'>
					<InsuranceCard
						name='Basic Protect'
						icon={<IoShieldOutline size={50} />}
						price='20'
						deposit='1000'
						CDW={true}
						CDWplus={false}
						SCDW={false}
						WUG={false}
					/>
					<InsuranceCard
						name='Medium Protect'
						icon={<IoShieldHalfSharp size={50} />}
						price='50'
						deposit='500'
						CDW={true}
						CDWplus={true}
						SCDW={false}
						WUG={false}
					/>
					<InsuranceCard
						name='Full Protect'
						icon={<IoShieldSharp size={50} />}
						price='70'
						deposit='100'
						CDW={true}
						CDWplus={true}
						SCDW={true}
						WUG={true}
					/>
				</div>
			</div>
		</BaseLayout>
	);
}
