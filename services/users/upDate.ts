import airDB from '../airtableClient';

const upDate = async (payload, airtableId) => {
	const upDateUser = await airDB('users').update([
		{
			id: airtableId,
			fields: payload,
		},
	]);
	return upDateUser;
};

export default upDate;
