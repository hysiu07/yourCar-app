import airDB from '../airtableClient';

const upDate = async (payload, airtableId) => {
	const upDateCar = await airDB('cars').update([
		{
			id: airtableId,
			fields: payload,
		},
	]);
	return upDateCar;
};

export default upDate;
