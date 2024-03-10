import BaseLayout from '@/components/BaseLayout';
import LoginComponent from '@/components/LoginComponent';
import ReservationComponent from '@/components/ReservationComponent';
import ReservationComponentContent from '@/components/ReservationComponent/ReservationComponentContent';
import React from 'react';
import { connect } from 'react-redux';

 function SummaryPage({reservation}) {
	return (
		<BaseLayout>
			<div className='summary-page'>
				<div className='summary-page__login-container'>
					<LoginComponent />
				</div>
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