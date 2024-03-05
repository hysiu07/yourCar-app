import { combineReducers } from '@reduxjs/toolkit';
import { reducerReservationInfo } from './reservationinfo';

const rootReducers = combineReducers({
	reservationInfo: reducerReservationInfo,
});

export default rootReducers;
