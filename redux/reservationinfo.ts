const ADD_CITY_AND_DATE = 'reservation/ADD_CITY_AND_DATE';
const ADD_VEHICLE = 'reservation/ADD_VEHICLE';
const ADD_INSURENCE = 'reservation/ADD_INSURANCE';
const ADD_EQUIPMENT = 'reservation/ADD_EQUIPMENT';

type InitialStateType = {
	city: string | null;
	pickUpDate: string | null;
	returDate: string | null;
	numberDays: number | null;
	carId: number | null;
	orderId: number | null;
	insuranceType: string | null;
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
	orderId: null,
	insuranceType: null,
	equipment: null,
	priceCar: null,
	priceSum: null,
	priceEquipment: null,
};

export const addCarAndDate = (city, pickUpDate, returDate,numberDays) => ({
	type: ADD_CITY_AND_DATE,
	payload: { city, pickUpDate, returDate, numberDays },
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
		default:
			return state;
	}
};
