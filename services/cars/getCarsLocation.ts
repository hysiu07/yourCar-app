import airDb from '../airtableClient';

const getCarsLocation = async (location) => {
	const offers = await airDb('cars-offers')
		.select({ filterByFormula: `location="${location}"` })
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
export default getCarsLocation;
