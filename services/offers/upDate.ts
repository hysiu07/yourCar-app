import airDB from '../airtableClient';

const upDate = async (payload, airtableId) => {
	const upDateOffer = await airDB('cars-offers').update([
		{
			id: airtableId,
			fields: payload,
		},
	]);
	return upDateOffer;
};

export default upDate;
