import BaseLayout from '@/components/BaseLayout';
import PaginationComponent from '@/components/Pagination-component';
import React, { useState } from 'react';

import { IoShieldOutline } from 'react-icons/io5';
import { IoShieldHalfSharp } from 'react-icons/io5';
import { IoShieldSharp } from 'react-icons/io5';
import { RxCheckCircled } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { addInsurance } from '@/redux/reservationinfo';
import Link from 'next/link';

import { ThreeDots } from 'react-loader-spinner';

export default function InsuracnePage() {
	const [insuracne, setInsurance] = useState('');
	const [loaderGoOn, setLoaderGoOn] = useState(false);
	const dispatch = useDispatch();

	return (
		<BaseLayout>
			<div className='insurance-container'>
				<PaginationComponent />
				<h3>Insurance Package</h3>
				<div className='insurance-packages'>
					<table>
						<tbody>
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
									CDW (AC)/TP (Theft protection) - Reduced liability for damage
									or theft
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
										onClick={() => {
											setInsurance('medium'),
												dispatch(addInsurance('medium', 20));
										}}
									>
										Choose
									</button>
								</td>
								<td className='last-row'>
									<button
										className={`btn-choose ${
											insuracne === 'full' ? 'selected-insurance-btn' : ''
										}`}
										onClick={() => {
											setInsurance('full'), dispatch(addInsurance('full', 50));
										}}
									>
										Choose
									</button>
								</td>
							</tr>
						</tbody>
					</table>

					{/* table for mobile */}

					<div className='table-for-mobile'>
						<div className='insurance-type'>
							<div className='icon-box'>
								<IoShieldOutline size={60} className='icon-shield' />
								<p>Basic Protect</p>
							</div>
							<div className='box'>
								<span>Price:</span>
								<p>0 USD</p>
							</div>
							<div className='box'>
								<span>Deposit:</span>
								<p>1000 USD</p>
							</div>
							<div className='box'>
								<span>
									CDW (AC)/TP (Theft protection) - Reduced liability for damage
									or theft
								</span>

								<RxCheckCircled size={25} className='active' />
							</div>
							<div className='box'>
								<span>CDW+ - Insurance coverage with reduced excess</span>

								<RxCheckCircled size={25} className='desactive' />
							</div>
							<div className='box'>
								<span>
									SCDW - Full coverage of own contribution in case of vehicle
									damage/injuries
								</span>

								<RxCheckCircled size={25} className='desactive' />
							</div>
							<div className='box'>
								<span>
									WUG (Wheels, Undercarriage, Glass) - Protection for wheels,
									undercarriage, and glass
								</span>

								<RxCheckCircled size={25} className='desactive' />
							</div>
							<div className='box'>
								<span>Unlimited mileage</span>

								<RxCheckCircled size={25} className='active' />
							</div>
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
						</div>

						{/* medium insurance */}
						<div className='insurance-type'>
							<div className='icon-box'>
								<IoShieldHalfSharp size={60} className='icon-shield' />
								<p>Medium Protect</p>
							</div>
							<div className='box'>
								<span>Price:</span>
								<p>20 USD</p>
							</div>
							<div className='box'>
								<span>Deposit:</span>
								<p>500 USD</p>
							</div>
							<div className='box'>
								<span>
									CDW (AC)/TP (Theft protection) - Reduced liability for damage
									or theft
								</span>

								<RxCheckCircled size={25} className='active' />
							</div>
							<div className='box'>
								<span>CDW+ - Insurance coverage with reduced excess</span>

								<RxCheckCircled size={25} className='active' />
							</div>
							<div className='box'>
								<span>
									SCDW - Full coverage of own contribution in case of vehicle
									damage/injuries
								</span>

								<RxCheckCircled size={25} className='desactive' />
							</div>
							<div className='box'>
								<span>
									WUG (Wheels, Undercarriage, Glass) - Protection for wheels,
									undercarriage, and glass
								</span>

								<RxCheckCircled size={25} className='desactive' />
							</div>
							<div className='box'>
								<span>Unlimited mileage</span>

								<RxCheckCircled size={25} className='active' />
							</div>
							<button
								className={`btn-choose ${
									insuracne === 'medium' ? 'selected-insurance-btn' : ''
								}`}
								onClick={() => {
									setInsurance('medium'), dispatch(addInsurance('medium', 20));
								}}
							>
								Choose
							</button>
						</div>
						{/* full protect */}
						<div className='insurance-type'>
							<div className='icon-box'>
								<IoShieldSharp size={60} className='icon-shield' />
								<p>Full Protect</p>
							</div>
							<div className='box'>
								<span>Price:</span>
								<p>050 USD</p>
							</div>
							<div className='box'>
								<span>Deposit:</span>
								<p>100 USD</p>
							</div>
							<div className='box'>
								<span>
									CDW (AC)/TP (Theft protection) - Reduced liability for damage
									or theft
								</span>

								<RxCheckCircled size={25} className='active' />
							</div>
							<div className='box'>
								<span>CDW+ - Insurance coverage with reduced excess</span>

								<RxCheckCircled size={25} className='active' />
							</div>
							<div className='box'>
								<span>
									SCDW - Full coverage of own contribution in case of vehicle
									damage/injuries
								</span>

								<RxCheckCircled size={25} className='active' />
							</div>
							<div className='box'>
								<span>
									WUG (Wheels, Undercarriage, Glass) - Protection for wheels,
									undercarriage, and glass
								</span>

								<RxCheckCircled size={25} className='active' />
							</div>
							<div className='box'>
								<span>Unlimited mileage</span>

								<RxCheckCircled size={25} className='active' />
							</div>
							<button
								className={`btn-choose ${
									insuracne === 'full' ? 'selected-insurance-btn' : ''
								}`}
								onClick={() => {
									setInsurance('full'), dispatch(addInsurance('full', 50));
								}}
							>
								Choose
							</button>
						</div>
					</div>
				</div>
				{insuracne !== '' && (
					<Link
						href={'/order/insurance/equipment'}
						className='btn-continue'
						onClick={() => {
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
							'Go on'
						)}
					</Link>
				)}
			</div>
		</BaseLayout>
	);
}
