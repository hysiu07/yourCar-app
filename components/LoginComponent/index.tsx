import React from 'react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { ThreeDots } from 'react-loader-spinner';
export default function LoginComponent() {
	const userForm = useRef<any | null>(null);
	const [error, setError] = useState<string | null>();
	const [formProcessing, setFormProcessing] = useState(false);
	const [loader, setLoader] = useState(false);
	const router = useRouter();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (formProcessing) {
			return;
		}
		setError(null);
		setFormProcessing(true);

		const form = new FormData(userForm.current);
		const payload = {
			email: form.get('email'),
			password: form.get('password'),
		};
		const { ok }: any = await signIn('credentials', {
			redirect: false,
			email: form.get('email'),
			password: form.get('password'),
		});
		if (ok) {
			setLoader(true);
			router.push('/');
		} else {
			setError('Not authorized. Try again!');
		}
		setFormProcessing(false);
	};

	return (
		<div className='login-panel'>
			<h2>Log in</h2>
			<p>{error}</p>
			<form ref={userForm} onSubmit={handleSubmit}>
				<input type='email' name='email' placeholder='User email' />
				<input type='password' name='password' placeholder='Password' />
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
						'Log in'
					)}
				</button>
			</form>
			<p>
				Don't have account? Click here! <Link href='/signin'>Sign inn</Link>
			</p>
		</div>
	);
}
