import { useRef } from 'react';

export default function OfferEditPanel({
	offer,
	closeEditPanel,
	handleUpdateOffer,
	cars,
}) {
	const offerForm = useRef<null | any>(null);
console.log(offer);
	return (
		<div className='edit-offer-component'>
			<div className='panel'>
				<h3>Edit Offer Panel</h3>
				<form ref={offerForm}>
					<label htmlFor='status'>Status</label>
					<select name='status' defaultValue={offer.status}>
						<option value='not available'>not available</option>
						<option value='available'>available</option>
					</select>
					<label htmlFor='location'>Location:</label>
					<select name='location' defaultValue={offer.location}>
						<option value='krakow'>krakow</option>
						<option value='warsaw'>warsaw</option>
						<option value='gdansk'>gdansk</option>
						<option value='szczecin'>szczecin</option>
						<option value='poznan'>poznan</option>
					</select>

					<label htmlFor='price'>Price: </label>
					<input type='number' name='price' defaultValue={offer.price} />
					<label htmlFor='car'>Car:</label>
					<select name='car' value={offer.idCar}>
						{cars.map((car) => {
							return (
								<option value={car.id} key={car.index}>
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
								handleUpdateOffer(offer.airtableId, offerForm.current);
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
