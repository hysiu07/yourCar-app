import airDB from '../airtableClient';

const deleteOffer = async (airtableId) => {
	const user = await airDB('users').destroy([airtableId]);
	return user;
};
export default deleteOffer;
