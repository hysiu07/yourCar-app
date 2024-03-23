import airDb from '../airtableClient';

const create = async (payload) => {
	const offer = await airDb('cars-offers').create([
		{
			fields: {
				location: payload.location,
				status: payload.status,
				cars: payload.cars
			},
		},
	]);
	return offer;
};
export default create;
