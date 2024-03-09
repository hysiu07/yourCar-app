import BaseLayout from '@/components/BaseLayout';
import LoginComponent from '@/components/LoginComponent';
import React from 'react';

export default function SummaryPage() {
	return (
		<BaseLayout>
			<div className='summary-page'>
				<div className='summary-page__login-container'>
					<LoginComponent />
				</div>
				<div className='summary-page__summary-view-container'>
					<h3>Your Reservations:</h3>
				</div>
			</div>
		</BaseLayout>
	);
}
