import airDb from '../airtableClient';

const getPopularCars = async () => {
	const cars = await airDb('cars')
		.select({ filterByFormula: 'type="special"' })
		.firstPage();

	if (cars) {
		return cars.map((car) => ({ airtableId: car.id, ...car.fields }));
	}
};
export default getPopularCars;
