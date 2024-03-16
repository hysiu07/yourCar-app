import airDb from '../airtableClient';

const getAllUsers = async () => {
	const users = await airDb('users')
		.select({ sort: [{ field: 'id' }] })
		.firstPage();

	if (users) {
		return users.map((user) => ({ airtableId: user.id, ...user.fields }));
	}
};
export default getAllUsers;
