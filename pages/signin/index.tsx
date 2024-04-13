import React, { useRef, useState } from 'react';
import BaseLayout from '@/components/BaseLayout';
import { useRouter } from 'next/router';
import { ThreeDots } from 'react-loader-spinner';
export default function SignIn() {
	const userForm = useRef<null | any>(null);
	const [error, setError] = useState<string | null>();
	const [formProcessing, setFormProcessing] = useState(false);
	const [loader, setLoader] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (formProcessing) return;
		setError(null);
		setFormProcessing(true);

		const form = new FormData(userForm.current);
		const payload = {
			username: form.get('username'),
			email: form.get('email'),
			password: form.get('password'),
		};

		if (payload.password !== form.get('confirm-password')) {
			setError('Given passwords not match');
			setFormProcessing(false);
			return;
		}
		const response = await fetch('/api/users/register', {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: {
				'Content-type': 'application/json',
			},
		});
 
		if (response.ok) {
			setLoader(true)
			router.push('/');
		} else {
			const payload = await response.json();
			setFormProcessing(false);
			setError(payload.error);
		}
	};

	return (
		<BaseLayout>
			<section className='signin-page'>
				<div className='signin-panel'>
					<h2>Create new account</h2>

					<form action='' ref={userForm} onSubmit={handleSubmit}>
						<input
							type='text'
							name='username'
							placeholder='User name'
							required
						/>
						<input
							type='email'
							name='email'
							placeholder='User email'
							required
						/>
						<input
							type='password'
							name='password'
							placeholder='Password'
							required
						/>
						<input
							type='password'
							name='confirm-password'
							placeholder='Confirm Password'
						/>
						<button type='submit'>
							
							{loader ? (
								<ThreeDots
									visible={true}
									height='30'
									width='30'
									color='white'
									radius='9'
									ariaLabel='three-dots-loading'
									wrapperStyle={{}}
									wrapperClass=''
								/>
							) : (
								'Register user'
							)}
						</button>
					</form>
					<p className='error'>{error}</p>
				</div>
			</section>
		</BaseLayout>
	);
}
