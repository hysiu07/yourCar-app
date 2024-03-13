import BaseLayout from '@/components/BaseLayout';
import PaginationComponent from '@/components/Pagination-component';
import ReservationComponentContent from '@/components/ReservationComponent/ReservationComponentContent';
import React from 'react';
import { connect } from 'react-redux';

import { useSession } from 'next-auth/react';

function SummaryPage({ reservation }) {
	const { data, data: session } = useSession();
	return (
		<BaseLayout>
			<div className='summary-page'>
				<PaginationComponent />
				<div className='summary-page__summary-view-container'>
					<ReservationComponentContent reservation={reservation} />
				</div>
				{!session ? (
					<div className='info-container'>
						<p>You haveto log in!</p>
					</div>
				) : (
					<button
						disabled={!session}
						className={`btn-go-to-payment ${!session ? 'disabled-btn' : ''}`}
					>
						Go to payment
					</button>
				)}
			</div>
		</BaseLayout>
	);
}
const mapStateToProps = (state: any) => {
	return {
		reservation: state.reservationInfo,
	};
};
export default connect(mapStateToProps)(SummaryPage);
