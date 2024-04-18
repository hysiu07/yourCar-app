import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser } from '@/redux/reservationinfo';

// import axios from 'axios';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
function PaymentBtn({ reservation, user }) {
	const dispatch = useDispatch();

	React.useEffect(() => {
		// Check to see if this is a redirect back from Checkout
		const query = new URLSearchParams(window.location.search);
		if (query.get('success')) {
			console.log('Order placed! You will receive an email confirmation.');
		}

		if (query.get('canceled')) {
			console.log(
				'Order canceled -- continue to shop around and checkout when you’re ready.'
			);
		}
	}, []);

	const handlePayForCar = async (price) => {
		// axios.post('/api/checkout_sessions', {
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// });
		// try {
		// 	const response = await fetch('/api/checkout_sessions', {
		// 		method: 'POST',
		// 		// body: JSON.stringify(price),
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 	});
		// 	if (!response.ok) {
		// 		throw new Error('Failed to fetch');
		// 	}
		// 	// Obsłuż sukces
		// } catch (error) {
		// 	console.error('Error:', error.message);
		// }
	};

	return (
		<div>
			{/* <ReservationComponentContent reservation={reservation} /> */}
			<form action='/api/checkout_sessions' method='POST'>
				<section>
					<button
						className={`${reservation.reserved ? '' : 'disabled-btn'}`}
						type='submit'
						role='link'
						disabled={!reservation.processing || !reservation.reserved}
						// onSubmit={(e) => {
						// 	e.preventDefault();
						// 	handlePayForCar(reservation.priceSum);
						// }}
						onClick={async () => {
							dispatch(addUser(user.id));
						}}
					>
						Pay for Car!
					</button>
				</section>
				<style jsx>
					{`
						section {
							background: #ffffff;
							display: flex;
							margin-top: 20px;
							flex-direction: column;
							width: 400px;
							height: 112px;
							border-radius: 6px;
							justify-content: space-between;
						}
						button {
							padding: 8px 16px;
							background: #3083ff;
							border-radius: 5px;
							width: 200px;
							margin: 0 auto;
							color: white;
							border: 0;
							font-size: 1.6rem;
							cursor: pointer;
							transition: all 0.2s ease;
							box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
						}
					`}
				</style>
			</form>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		reservation: state.reservationInfo,
	};
};
export default connect(mapStateToProps)(PaymentBtn);
