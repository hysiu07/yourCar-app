import React, { useEffect, useState } from 'react';
import getAllUsers from '@/services/users/getAllUsers';

import { FaRegUser } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import AdminPage from '..';
import deleteUser from '@/services/users/delete';

export const getServerSideProps = async () => {
	const users = await getAllUsers();
	return {
		props: {
			users,
		},
	};
};

const handleDeleteUser = (payload) => {
	fetch('/api/users/delete', {
		method: 'DELETE',
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.then((data) => console.log(data));
};
export default function AdminUsersPage({ users }) {
	const [actualUsers, setActualUsers] = useState(users.users);
	useEffect(() => {
		setActualUsers(users.users);
	}, [actualUsers]);
	console.log(users);
	return (
		<AdminPage>
			<div className='users-container'>
				<form action=''>
					<label htmlFor=''>Search user:</label>
					<input type='text' placeholder='write here user email' />
				</form>
				{users.map((user) => {
					console.log(user.airtableId);
					return (
						<div className='user' key={user.id}>
							<div className='user-info'>
								<FaRegUser size={20} />
								<div className='box'>
									<span className='label'>Email:</span>
									<span> {user.email}</span>
								</div>
								<div className='box'>
									<span className='label'>Name:</span>
									<span> {user.username}</span>
								</div>
								<div className='box'>
									<span className='label'>Id:</span>
									<span> {user.id}</span>
								</div>

								<div className='box'>
									<span className='label'>Role:</span>
									<span> {user.role}</span>
								</div>

								<div className='box'>
									<span className='label'>Created By:</span>
									<span>{new Date(user.createdBy).toLocaleString()}</span>
								</div>

								<div className='box'>
									<span className='label'>Last Modify:</span>
									<span> {new Date(user.lastModify).toLocaleString()}</span>
								</div>
							</div>

							<div className='buttons-box'>
								<button
									onClick={() => {
										handleDeleteUser(user.airtableId);
									}}
								>
									<IoClose size={20} />
								</button>
								<button>
									<FaRegEdit size={20} />
								</button>
								{/* <button>
										<IoIosArrowDropdown size={20} />
									</button> */}
							</div>
						</div>
					);
				})}
			</div>
		</AdminPage>
	);
}
