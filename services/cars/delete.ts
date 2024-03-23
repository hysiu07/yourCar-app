import airDB from '../airtableClient';

const deleteCar = async (airtableId) => {
	const car = await airDB('cars').destroy([airtableId]);
	return car;
};
export default deleteCar;
