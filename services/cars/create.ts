import airDb from '../airtableClient';
import Joi from 'joi';
const schema = Joi.object({
	name: Joi.string().required(),
	price: Joi.string().required(),
	gearbox: Joi.string().valid('Automatic', 'Manual').required(),
	door: Joi.string().required(),
	bags: Joi.string().required(),
	passenger: Joi.string().required(),
	img: Joi.string().required(),
	type: Joi.string().required(),
});

const create = async (payload) => {
	const validatedCar = await schema.validateAsync(payload);
	const car = await airDb('cars').create([
		{
			fields: {
				...validatedCar,
			},
		},
	]);
	console.log(car, 'car');
	return car;
};
export default create;
