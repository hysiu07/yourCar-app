import { string } from 'joi';
import airDb from '../airtableClient';

const create = async (payload) => {
	const order = await airDb('orders').create([
		{
			fields: {
				userID: payload.username,
				status: 'not paid',
				priceSum: String(payload.priceSum),
				insuranceType: payload.insuranceType,
				insurancePrice: String(payload.insurancePrice),
				returDate: payload.returDate,
				pickUpDate: payload.pickUpDate,
				numberDays: String(payload.numberDays),
				city: payload.city,
				carPrice: String(payload.carPrice),
				carName: String(payload.carName),
				offerId: payload.offerId,
				equipmentsSum: String(payload.equipmentsSum),
				equipments: payload.equipments
			},
		},
	]);
	return order;
};
export default create;
