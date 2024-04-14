import React, { useState, useRef } from 'react';
import getAllUsers from '@/services/users/getAllUsers';
import AdminPage from '..';

import User from './(user)/User';
import { useRouter } from 'next/router';

export const getServerSideProps = async () => {
	const usersData = await getAllUsers();
	return {
		props: {
			usersData,
		},
	};
};

export default function AdminUsersPage({ usersData }) {
	const [users, setUsers] = useState(usersData);
	const formSearch = useRef<any | null>(null);
	const router = useRouter();

	const handlefindUser = async () => {
		const searchUser = new FormData(formSearch.current);
		const email = searchUser.get('email');
		const filteredUsers = users.filter((user) => user.email === email);
		setUsers(filteredUsers);
	};
	return (
		<AdminPage>
			<div className='users-container'>
				<form className='form-search-user' ref={formSearch}>

					<input
						type='email'
						name='email'
						id='email'
						required
						placeholder='Email'
					/>
					<button
						className='btn-admin-page'
						onClick={(e) => {
							e.preventDefault();
							handlefindUser();
						}}
					>
						Search!
					</button>
					<button className='btn-admin-page'
						onClick={(e) => {
							e.preventDefault();
							router.push('/admin/user');
						}}
					>
						Reset
					</button>
				</form>
				{users.map((user) => {
					return <User user={user} key={user.id} />;
				})}
			</div>
		</AdminPage>
	);
}
