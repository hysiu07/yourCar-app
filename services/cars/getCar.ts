import airDb from '../airtableClient';

type idType = {
	id: number ;
};

const getCar = async (id: idType) => {
	const car = await airDb('cars')
		.select({ filterByFormula: `id="${id}"` })
		.firstPage();

	if (car) {
		return {
			airtableId: car[0].id,
			...car[0].fields,
		};
	}
};
export default getCar;
