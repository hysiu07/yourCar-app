import { combineReducers } from '@reduxjs/toolkit';
import { reducerReservationInfo } from './reservationinfo';

const rootReducers = combineReducers({
	reservationInfo: reducerReservationInfo,
});
export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
