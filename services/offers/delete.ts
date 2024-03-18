import airDB from '../airtableClient';

const deleteOffer = async (airtableId) => {
	const user = await airDB('cars-offers').destroy([airtableId]);
	return user;
};
export default deleteOffer;
