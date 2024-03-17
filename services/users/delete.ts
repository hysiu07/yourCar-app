import airDB from '../airtableClient';

const deleteUser = async (airtableId) => {
	const user = await airDB('users').destroy([airtableId]);
	return user;
};
export default deleteUser;
