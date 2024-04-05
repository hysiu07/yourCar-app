import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { reset } from '@/redux/reservationinfo';
function ThanksPage({ reservation }) {
    const dispatch = useDispatch()
	// const { data, data: session } = useSession();
	// const router = useRouter();
	// console.log(session);
	// console.log(reservation);
	const [reservations, setReservation] = useState(reservation);
	const [numberReservation, setNumberReservation] = useState();

	let payload = {
		username: [reservations.username],
		// email: [reservations.email],
	};
	// if (session) {
	// }

	// const response = fetch('/api/orders/add', {
	//     method: 'POST',
	//     body: JSON.stringify(payload),
	//     headers: {
	//         'Content-Type': 'application/json',
	//     },
	// });
	// if (response.ok) {

	// }
	useEffect(() => {
		const addOrder = async () => {
			try {
				const payload = {
					username: [reservation.username],
				};

				const response = await fetch('/api/orders/add', {
					method: 'POST',
					body: JSON.stringify(payload),
					headers: {
						'Content-Type': 'application/json',
					},
                });
                
                await dispatch(reset())

				if (!response.ok) {
					throw new Error('Failed to add order');
				}

				// Tutaj możesz dodać logikę obsługi sukcesu, np. przekierowanie użytkownika
				// router.push('/success-page');
			} catch (error: any) {
				console.error('Error:', error.message);
				// Tutaj możesz dodać logikę obsługi błędu, np. wyświetlenie komunikatu o błędzie
			}
		};

		addOrder();
	}, []);
	// useEffect(() => {
	// 	return;
	// }, [reservations]);
	return (
		<section>
			<h3>Thank you for your order.</h3>
			<h4>Your order number is : {reservations.username} </h4>
		</section>
	);
}
const mapStateToProps = (state: any) => {
	return {
		reservation: state.reservationInfo,
	};
};
export default connect(mapStateToProps)(ThanksPage);
