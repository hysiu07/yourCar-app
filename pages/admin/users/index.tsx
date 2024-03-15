import React from 'react';
import getAllUsers from '@/services/users/getAllUsers';
import AssidePanel from '../components/AssidePanel';
import { FaRegUser } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import { IoIosArrowDropdown } from 'react-icons/io';
export const getServerSideProps = async () => {
	const users = await getAllUsers();
	return {
		props: {
			users,
		},
	};
};
export default function AdminUsersPage({ users }) {
	console.log(users);
	return (
		<div className='admin-page'>
			<AssidePanel />
			<div className='content-panel'>
				<div className='users-container'>
					{users.map((user) => {
						return (
							<div className='user'>
								<FaRegUser size={20} />
								<div className='user-info'>
									<span>Id: {user.id}</span>
									<span>Email: {user.email}</span>
									<span>Name: {user.username}</span>
									<span>Role : {user.role}</span>
								</div>

								<div className='buttons-box'>
									<button>
										<IoClose size={20} />
									</button>
									<button>
										<FaRegEdit size={20} />
									</button>
									<button>
										<IoIosArrowDropdown size={20} />
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
