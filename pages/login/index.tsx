import BaseLayout from '@/components/BaseLayout';
import React from 'react';
import LoginComponent from '@/components/LoginComponent';

export default function LogInPage() {
	return (
		<BaseLayout>
			<section className='login-page'>
				<LoginComponent />
			</section>
		</BaseLayout>
	);
}
