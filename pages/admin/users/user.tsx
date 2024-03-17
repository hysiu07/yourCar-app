import React from 'react';
import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import PopUpAdmin from '../components/PopUpAdmin';
import UserEditPanel from '../components/UserEditPanel';

export default function User({ user }) {
	const [showPopUp, setShowPopUp] = useState<boolean>(false);
	const [showEditPanel, setShowEditPanel] = useState<boolean>(false);

	const handleDeleteUser = async (payload) => {
		await fetch('/api/users/delete', {
			method: 'DELETE',
			body: JSON.stringify(payload),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => console.log(data));

		// window.location.reload();
	};

	const handleUpdateUser = async (airtableId, form) => {
		const formUserUpDate = new FormData(form);

		const payload = {
			username: formUserUpDate.get('username'),
			email: formUserUpDate.get('email'),
			role: formUserUpDate.get('role'),
		};

		await fetch('/api/users/update', {
			method: 'POST',
			body: JSON.stringify({
				userInfo: payload,
				userAirtableId: airtableId,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	// const handleUpdateInfoUser = (e) => {
	// 	e.preventDefault();
	// };
	return (
		<div className='user' key={user.id}>
			{showPopUp ? (
				<PopUpAdmin
					text={'Do you want delete user?'}
					name={user.email}
					closePopUp={setShowPopUp}
					handle={() => handleDeleteUser(user.airtableId)}
				/>
			) : (
				''
			)}
			{showEditPanel ? (
				<UserEditPanel
					user={user}
					handleUpdateUser={handleUpdateUser}
					closeEditPanel={setShowEditPanel}
				/>
			) : (
				''
			)}

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
						setShowPopUp(true);
						// handleDeleteUser(user.airtableId);
					}}
				>
					<IoClose size={20} />
				</button>
				<button
					onClick={() => {
						setShowEditPanel(true);
					}}
				>
					<FaRegEdit size={20} />
				</button>
				{/* <button>
										<IoIosArrowDropdown size={20} />
									</button> */}
			</div>
		</div>
	);
}
