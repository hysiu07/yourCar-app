import airDb from '../airtableClient';

const create = async (payload) => {
	const car = await airDb('cars').create([
		{
			fields: {
				name: payload.name,
				gearbox: payload.gearbox,
				door: payload.door,
				bags: payload.bags,
				passenger: payload.passenger,
				img: payload.img,
				type: payload.type,
				price: payload.price,
			},
		},
	]);
	return car;
};
export default create;
