const ADD_CITY_AND_DATE = 'reservation/ADD_CITY_AND_DATE';
const ADD_VEHICLE = 'reservation/ADD_VEHICLE';
const ADD_INSURANCE = 'reservation/ADD_INSURANCE';
const ADD_EQUIPMENT = 'reservation/ADD_EQUIPMENT';
const RESET = 'reservation/RESET';

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
		carPrice: null | number;
	};
	city: string | null;
	pickUpDate: string | null;
	returDate: string | null;
	numberDays: number | null;

	offerId: number | null;
	insuranceType: string | null;
	insurancePrice: number | null;
	equipments: EquipmentItem[] | [] | null;
	equipmentsSumPrice: number | null;
	priceSum: number | null;
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
	equipmentsSumPrice: null,
	priceSum: null,
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
export const reset = () => ({
	type: RESET,
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
				equipmentsSumPrice: null,
				priceSum: null,
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
				priceSum:
					(carPrice || 0) +
					(state.insurancePrice || 0) +
					(state.equipmentsSumPrice || 0),
			};

		case ADD_INSURANCE:
			const { insurance, insurancePrice } = action.payload;
			return {
				...state,
				insuranceType: insurance,
				insurancePrice: state.numberDays && insurancePrice * state.numberDays,
				priceSum:
					(state.carInfo.carPrice || 0) +
					(insurancePrice || 0) +
					(state.equipmentsSumPrice || 0),
			};

		case ADD_EQUIPMENT:
			const { equipments } = action.payload;
			const priceSum = equipments.reduce((total, equipment) => {
				const equipmentPrice = equipment.price || 0;
				return total + equipmentPrice;
			}, 0);
			return {
				...state,
				equipments: equipments,
				equipmentsSumPrice: priceSum,
				priceSum:
					(state.carInfo.carPrice || 0) +
					(state.insurancePrice || 0) +
					priceSum,
			};
		case RESET:
			return {
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
				equipmentsSumPrice: null,
				priceSum: null,
			};
		default:
			return state;
	}
};
