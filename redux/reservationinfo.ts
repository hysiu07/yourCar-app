const ADD_CITY_AND_DATE = 'reservation/ADD_CITY_AND_DATE';
const ADD_VEHICLE = 'reservation/ADD_VEHICLE';
const ADD_INSURANCE = 'reservation/ADD_INSURANCE';
const ADD_EQUIPMENT = 'reservation/ADD_EQUIPMENT';

type EquipmentItem = {
	equipmentName: string | null;
	equipmentPrice: number | null;
};

type InitialStateType = {
	processing: boolean;
	carInfo: {
		carName: null | string;
		cartype: null | string;
		carImg: null | string;
		carId: null | string | number;
		carPrice: null | string | number;
	};
	city: string | null;
	pickUpDate: string | null;
	returDate: string | null;
	numberDays: number | null;

	offerId: number | null;
	insuranceType: string | null;
	insurancePrice: number | null;
	equipments: EquipmentItem[] | [] | null;

	priceSum: number | null;
	priceEquipment: number | null;
};

const INITIAL_STATE_RESERVATION: InitialStateType = {
	processing: false,
	carInfo: {
		carName: null,
		cartype: null,
		carImg: null,
		carId: null,
		carPrice: null,
	},
	city: null,
	pickUpDate: null,
	returDate: null,
	numberDays: null,
	offerId: null,
	insuranceType: null,
	insurancePrice: null,
	equipments: null,
	priceSum: null,
	priceEquipment: null,
};

export const addCityandDate = (city, pickUpDate, returDate, numberDays) => ({
	type: ADD_CITY_AND_DATE,
	payload: { city, pickUpDate, returDate, numberDays },
});
export const addCar = (carId, offerId, carPrice, carName, carType, carImg) => ({
	type: ADD_VEHICLE,
	payload: { carId, offerId, carPrice, carName, carType, carImg },
});
export const addInsurance = (insurance, insurancePrice) => ({
	type: ADD_INSURANCE,
	payload: { insurance, insurancePrice },
});
export const addEquipment = (equipments) => ({
	type: ADD_EQUIPMENT,
	payload: { equipments },
});

export const reducerReservationInfo = (
	state = INITIAL_STATE_RESERVATION,
	action
) => {
	switch (action.type) {
		case ADD_CITY_AND_DATE:
			const { city, pickUpDate, returDate, numberDays } = action.payload;
			return {
				processing: false,
				carInfo: {
					carName: null,
					carType: null,
					carImg: null,
					carId: null,
					carPrice: null,
				},
				city: city,
				pickUpDate: pickUpDate,
				returDate: returDate,
				numberDays: numberDays,
				offerId: null,
				insuranceType: null,
				insurancePrice: null,
				equipments: null,
				priceSum: null,
				priceEquipment: null,
			};
		case ADD_VEHICLE:
			const { carId, offerId, carPrice, carName, carType, carImg } =
				action.payload;
			return {
				...state,
				processing: true,
				carInfo: {
					carName: carName,
					carType: carType,
					carImg: carImg,
					carId: carId,
					carPrice: state.numberDays && carPrice * state.numberDays,
				},

				offerId: offerId,
			};
		case ADD_INSURANCE:
			const { insurance, insurancePrice } = action.payload;
			return {
				...state,
				insuranceType: insurance,
				insurancePrice: state.numberDays && insurancePrice * state.numberDays,
			};
		case ADD_EQUIPMENT:
			const { equipments } = action.payload;
			return {
				...state,
				equipments: equipments,
			};
		default:
			return state;
	}
};
