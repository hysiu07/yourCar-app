import { useRef } from 'react';
import { useRouter } from 'next/router';
export default function OfferAddOffer({ closeAddPanel, cars }) {
	const offerForm = useRef<null | any>(null);
	const router = useRouter();

	const handleAddOffer = async () => {
		const newOffer = new FormData(offerForm.current);
		const payload = {
			status: newOffer.get('status'),
			location: newOffer.get('location'),
			cars: [newOffer.get('car')],
		};

		const response = await fetch('/api/offers/add', {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			router.reload()
			closeAddPanel(false);
		}
	};
	return (
		<div className='edit-offer-component'>
			<div className='panel'>
				<h3> Add Offer Panel</h3>
				<form ref={offerForm}>
					<label htmlFor='status'>Status</label>
					<select name='status'>
						<option value='not available'>not available</option>
						<option value='available'>available</option>
					</select>
					<label htmlFor='location'>Location:</label>
					<select name='location'>
						<option value='krakow'>krakow</option>
						<option value='warsaw'>warsaw</option>
						<option value='gdansk'>gdansk</option>
						<option value='szczecin'>szczecin</option>
						<option value='poznan'>poznan</option>
					</select>

					<label htmlFor='car'>Car:</label>
					<select name='car'>
						{cars.map((car) => {
							return (
								<option value={car.airtableId} key={car.index}>
									{car.name}
								</option>
							);
						})}
					</select>
					<div className='buttons-container'>
						<button
							type='submit'
							onClick={(e) => {
								e.preventDefault();
								handleAddOffer();
							}}
						>
							Add
						</button>
						<button
							onClick={(e) => {
								e.preventDefault();
								closeAddPanel();
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
