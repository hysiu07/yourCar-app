import airDb from '../airtableClient';

const getUser = async (email) => {
	const user = await airDb('users')
		.select({ filterByFormula: `email="${email}"`})
		.firstPage();

	return user;
};
export default getUser;
