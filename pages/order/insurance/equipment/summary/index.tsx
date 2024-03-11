import BaseLayout from '@/components/BaseLayout';
import PaginationComponent from '@/components/Pagination-component';
import ReservationComponentContent from '@/components/ReservationComponent/ReservationComponentContent';
import React from 'react';
import { connect } from 'react-redux';

function SummaryPage({ reservation }) {
	return (
		<BaseLayout>
			<div className='summary-page'>
			<PaginationComponent />
				<div className='summary-page__summary-view-container'>
					<ReservationComponentContent reservation={reservation} />
				</div>
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
