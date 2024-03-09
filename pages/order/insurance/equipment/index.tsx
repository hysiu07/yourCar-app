import BaseLayout from '@/components/BaseLayout';
import PaginationComponent from '@/components/Pagination-component';
import React from 'react';
import { useState } from 'react';

import Link from 'next/link';

import { TbUsers } from 'react-icons/tb';
import { MdAssistantNavigation } from 'react-icons/md';
import { FaChild } from 'react-icons/fa';

import { useDispatch } from 'react-redux';
import { addEquipment } from '@/redux/reservationinfo';
export function Additive({
	title,
	description,
	price,
	icon,
	equipment,
	setEquipment,
}) {
	const [active, setActive] = useState<boolean>(false);
	return (
		<div className={`additive ${active && 'active-additive'}`}>
			<div className='icon-box'>{icon}</div>
			<div className='text'>
				<h4 className='title'>{title}</h4>
				<p className='describing'>{description}</p>
			</div>
			<div className='price'>
				<p>Sum:</p>
				<p>{price} USD</p>
			</div>
			<button
				className='btn-add'
				onClick={() => {
					if (!equipment.includes(title)) {
						setEquipment([...equipment, title]);
						setActive(true);
					} else {
						setEquipment(equipment.filter((item) => item !== title));
						setActive(false);
					}
				}}
			>
				ADD
			</button>
		</div>
	);
}

export default function EquipmentPage() {
	const [equipment, setEquipment] = useState<string[]>([]);
	const dispatch = useDispatch();
	return (
		<BaseLayout>
			<div className='equipment-page'>
				<PaginationComponent />
			
				<div className='equipment-page__container'>
					<Additive
						title='Extra Driver'
						description='Two heads are always better than one. You can ensure a carefree
					vacation full of relaxation by adding an additional driver to your
					reservation, leaving nothing to chance.'
						price={20}
						icon={<TbUsers size={70} className='icon' />}
						equipment={equipment}
						setEquipment={setEquipment}
					/>
					<Additive
						title='Satellite Navigation GPS'
						description='If you want to arrive on time at your chosen destination and make the most of your time, you can rent our navigation system to provide you with a high-quality guide for your vacation. You can check where the nearest gas stations and restaurants are, avoid potential traffic jams, and relax during your journey.'
						price={30}
						icon={<MdAssistantNavigation size={70} className='icon' />}
						equipment={equipment}
						setEquipment={setEquipment}
					/>
					<Additive
						title='Child Seat (0-9 kg)'
						description='For infants from birth to 13 kg, this belongs to the group of car seats 0+.'
						price={25}
						icon={<FaChild size={70} className='icon' />}
						equipment={equipment}
						setEquipment={setEquipment}
					/>
					<Additive
						title='Child Seat (9-18 kg)'
						description='Car seat for children from birth to 18 kg, belonging to the groups of car seats 0+ and 1.'
						price={25}
						icon={<FaChild size={70} className='icon' />}
						equipment={equipment}
						setEquipment={setEquipment}
					/>
					<Additive
						title='Child Seat (18-36 kg)'
						description='Booster seat for children aged 4 to 12, belonging to the groups of car seats 2 and 3.'
						price={25}
						icon={<FaChild size={70} className='icon' />}
						equipment={equipment}
						setEquipment={setEquipment}
					/>
					<Additive
						title='Senior Driver'
						description='If you are over 71 years old, please choose this option during the reservation.'
						price={25}
						icon={<TbUsers size={70} className='icon' />}
						equipment={equipment}
						setEquipment={setEquipment}
					/>
				</div>
				<Link
					href='/order/insurance/equipment/summary'
					onClick={() => {
						dispatch(addEquipment(equipment));
					}}
				>
					Go on!
				</Link>
			</div>
		</BaseLayout>
	);
}
