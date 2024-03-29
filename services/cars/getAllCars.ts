import airDb from '../airtableClient';

const getAllCars = async () => {
	const cars = await airDb('cars')
		.select({ sort: [{ field: 'type' }] })
		.firstPage();
	if (cars) {
		return cars.map((car) => ({ airtableId: car.id, ...car.fields }));
	}
};
export default getAllCars;
