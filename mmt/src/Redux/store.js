import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "../Flights/flightComponents/flightSlice";
import flightBookingReducer from "../Flights/flightBookingComponents/flightBookingSlice";
import { authReducer } from "../Functions/auth/auth.reducer";
import hotelReducer from "../Hotels/HotelsSecondPage/hotelSlice";
import hotelBookingReducer from "../Hotels/Hotel/hotelBooking";

export const store = configureStore({
  reducer: {
    flight: flightReducer,
    flightBooking: flightBookingReducer,
    hotelBooking: hotelBookingReducer,
    auth: authReducer,
    hotel: hotelReducer,
    hotelBooking: hotelBookingReducer,
  },
});

console.log(store.getState());
