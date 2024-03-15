import React from 'react';

import getAllUsers from '@/services/users/getAllUsers';
import AssidePanel from './components/AssidePanel';

export default function AdminPage() {
	return (
		<div className='admin-page'>
			<AssidePanel />
			<div className='content-panel'>
				<div className='dashboard'></div>
			</div>
		</div>
	);
}
