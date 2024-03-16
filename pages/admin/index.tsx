import React from 'react';

import AssidePanel from './components/AssidePanel';

export default function AdminPage({ children }) {
	return (
		<div className='admin-page'>
			<AssidePanel />
			<div className='content-panel'>{children}</div>
		</div>
	);
}
