import airDB from '../airtableClient';

const upDate = async (airtableId) => {
	const upDateOffer = await airDB('orders').update([
		{
			id: airtableId,
			fields: {
				status: 'paid',
			},
		},
	]);
	return upDateOffer;
};

export default upDate;
