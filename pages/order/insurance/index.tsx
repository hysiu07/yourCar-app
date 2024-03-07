import BaseLayout from '@/components/BaseLayout';
import PaginationComponent from '@/components/Pagination-component';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import store from '@/redux/store';
import { IoShieldOutline } from 'react-icons/io5';
import { IoShieldHalfSharp } from 'react-icons/io5';
import { IoShieldSharp } from 'react-icons/io5';
import { RxCheckCircled } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { addInsurance } from '@/redux/reservationinfo';

export default function InsuracnePage() {
	const [insuracne, setInsurance] = useState('');
	const dispatch = useDispatch();
	console.log(store.getState());
	return (
		<BaseLayout>
			<PaginationComponent />
			<div className='insurance-container'>
				<h3>Insurance Package</h3>
				<div className='insurance-packages'>
					<table>
						<tr>
							<th></th>
							<th>
								<IoShieldOutline size={50} className='icon-shield' />
								<p>Basic Protect</p>
							</th>
							<th>
								<IoShieldHalfSharp size={50} className='icon-shield' />
								<p>Medium Protect</p>
							</th>
							<th>
								<IoShieldSharp size={50} className='icon-shield' />
								<p>Full Protect</p>
							</th>
						</tr>
						<tr>
							<td className='price'>Price</td>
							<td className='price'>0 USD</td>
							<td className='price'>20 USD</td>
							<td className='price'>50 USD</td>
						</tr>
						<tr>
							<td>Deposit</td>
							<td>1000 USD</td>
							<td>500 USD</td>
							<td>100 USD</td>
						</tr>

						<tr>
							<td>
								CDW (AC)/TP (Theft protection) - Reduced liability for damage or
								theft
							</td>
							<td>
								<RxCheckCircled size={25} className='active' />
							</td>
							<td>
								<RxCheckCircled size={25} className='active' />
							</td>
							<td>
								<RxCheckCircled size={25} className='active' />
							</td>
						</tr>
						<tr>
							<td>CDW+ - Insurance coverage with reduced excess</td>
							<td>
								<RxCheckCircled size={25} className='desactive' />
							</td>
							<td>
								<RxCheckCircled size={25} className='active' />
							</td>
							<td>
								<RxCheckCircled size={25} className='active' />
							</td>
						</tr>
						<tr>
							<td>
								SCDW - Full coverage of own contribution in case of vehicle
								damage/injuries
							</td>
							<td>
								<RxCheckCircled size={25} className='desactive' />
							</td>
							<td>
								<RxCheckCircled size={25} className='desactive' />
							</td>
							<td>
								<RxCheckCircled size={25} className='active' />
							</td>
						</tr>
						<tr>
							<td>
								WUG (Wheels, Undercarriage, Glass) - Protection for wheels,
								undercarriage, and glass
							</td>
							<td>
								<RxCheckCircled size={25} className='desactive' />
							</td>
							<td>
								<RxCheckCircled size={25} className='desactive' />
							</td>
							<td>
								<RxCheckCircled size={25} className='active' />
							</td>
						</tr>
						<tr>
							<td>Unlimited mileage</td>
							<td>
								<RxCheckCircled size={25} className='active' />
							</td>
							<td>
								<RxCheckCircled size={25} className='active' />
							</td>
							<td>
								<RxCheckCircled size={25} className='active' />
							</td>
						</tr>
						<tr>
							<td className='last-row'></td>
							<td className='last-row'>
								<button
									className={`btn-choose ${
										insuracne === 'basic' ? 'selected-insurance-btn' : ''
									}`}
									onClick={() => {
										setInsurance('basic'), dispatch(addInsurance('basic', 0));
									}}
								>
									Choose
								</button>
							</td>
							<td className='last-row'>
								<button
									className={`btn-choose ${
										insuracne === 'medium' ? 'selected-insurance-btn' : ''
									}`}
									onClick={() => setInsurance('medium')}
								>
									Choose
								</button>
							</td>
							<td className='last-row'>
								<button
									className={`btn-choose ${
										insuracne === 'full' ? 'selected-insurance-btn' : ''
									}`}
									onClick={() => setInsurance('full')}
								>
									Choose
								</button>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</BaseLayout>
	);
}
