const ADD_CITY_AND_DATE = 'reservation/ADD_CITY_AND_DATE';
const ADD_VEHICLE = 'reservation/ADD_VEHICLE';
const ADD_INSURANCE = 'reservation/ADD_INSURANCE';
const ADD_EQUIPMENT = 'reservation/ADD_EQUIPMENT';

type InitialStateType = {
	city: string | null;
	pickUpDate: string | null;
	returDate: string | null;
	numberDays: number | null;
	carId: number | null;
	offerId: number | null;
	insuranceType: string | null;
	insurancePrice: number | null;
	equipment: string[] | null;
	priceCar: number | null;
	priceSum: number | null;
	priceEquipment: number | null;
};

const INITIAL_STATE_RESERVATION: InitialStateType = {
	city: null,
	pickUpDate: null,
	returDate: null,
	numberDays: null,
	carId: null,
	offerId: null,
	insuranceType: null,
	insurancePrice: null,
	equipment: null,
	priceCar: null,
	priceSum: null,
	priceEquipment: null,
};

export const addCityandDate = (city, pickUpDate, returDate, numberDays) => ({
	type: ADD_CITY_AND_DATE,
	payload: { city, pickUpDate, returDate, numberDays },
});
export const addCar = (car, offerId) => ({
	type: ADD_VEHICLE,
	payload: { car, offerId },
});
export const addInsurance = (insurance, insurancePrice) => ({
	type: ADD_INSURANCE,
	payload: { insurance, insurancePrice },
});

export const reducerReservationInfo = (
	state = INITIAL_STATE_RESERVATION,
	action
) => {
	switch (action.type) {
		case ADD_CITY_AND_DATE:
			const { city, pickUpDate, returDate, numberDays } = action.payload;
			return {
				...state,
				city: city,
				pickUpDate: pickUpDate,
				returDate: returDate,
				numberDays: numberDays,
			};
		case ADD_VEHICLE:
			const { car, offerId } = action.payload;
			return {
				...state,
				carId: car,
				offerId: offerId,
			};
		case ADD_INSURANCE:
			const { insurance, insurancePrice } = action.payload;
			return {
				...state,
				insuranceType: insurance,
				insurancePrice: insurancePrice 
			};
		default:
			return state;
	}
};
