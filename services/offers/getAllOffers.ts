import airDb from '../airtableClient';

const getAllOffers = async () => {
	const offers = await airDb('cars-offers')
		.select({ sort: [{ field: 'location' }] })
		.firstPage();
	if (offers && offers.length > 0) {
		return {
			offers: offers.map((offer) => ({
				airtableId: offer.id,
				...offer.fields,
			})),
		};
	} else {
		return { offers: [] };
	}
};
export default getAllOffers;
