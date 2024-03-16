import airDB from '../airtableClient';

const deleteUser = async (airtableId) => {
	console.log(airtableId,'d');
	const user = await airDB('users').destroy([airtableId]);
	return user;
};
export default deleteUser;
