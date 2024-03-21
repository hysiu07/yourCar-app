import React from 'react';
import getAllUsers from '@/services/users/getAllUsers';
import AdminPage from '..';

import User from './(user)/User';

export const getServerSideProps = async () => {
	const users = await getAllUsers();
	return {
		props: {
			users,
		},
	};
};

export default function AdminUsersPage({ users }) {
	return (
		<AdminPage>
			<div className='users-container'>
				<form action=''>
					<label>Search user:</label>
					<input type='text' placeholder='write here user email' />
				</form>
				{users.map((user) => {
					return <User user={user} key={user.id} />;
				})}
			</div>
		</AdminPage>
	);
}
