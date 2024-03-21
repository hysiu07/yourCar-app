
import { useRef } from 'react';

export default function UserEditPanel({
	user,
	closeEditPanel,
	handleUpdateUser,
}) {
	const userForm = useRef<null | any>(null);

	return (
		<div className='edit-user-component'>
			<div className='panel'>
				<h3>Edit User Panel</h3>
				<form ref={userForm}>
					<label htmlFor='username'>Name</label>
					<input
						type='text'
						name='username'
						id='username'
						defaultValue={user.username}
					/>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						name='email'
						id='email'
						defaultValue={user.email}
					/>
					<label htmlFor='role'>Role:</label>
					<select name='role' id='role' defaultValue={user.role}>
						<option value='admin'>admin</option>
						<option value='customer'>customer</option>
					</select>
					<div className='buttons-container'>
						<button
							type='submit'
							onClick={(e) => {
								e.preventDefault();
								handleUpdateUser(user.airtableId, userForm.current);
							}}
						>
							Update
						</button>
						<button
							onClick={(e) => {
								e.preventDefault();
								closeEditPanel();
							}}
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
