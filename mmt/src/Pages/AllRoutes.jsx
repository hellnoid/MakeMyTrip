import React from "react";
import { Route, Routes } from "react-router-dom";
import { FlightBooking } from "../Flights/flightBookingComponents/FlightBooking";
import { Flight } from "../Flights/flightComponents/Flight";
import { FlightPayment } from "../Flights/FlightPayment/FlightPayment";
import { Payment } from "../Flights/FlightPayment/Payment";
import { Home } from "../Functions/Home/Home";
import { Hotel } from "../Hotels/Hotel/Hotel";
import { Profile } from "../Functions/Profile/Profile";
import { Trips } from "../Flights/Trips/Trips";
import ProductPage from "../Hotels/HotelsSecondPage/ProductPage";
import Review from "../ReviewBooking/Review";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flights" element={<Flight />} />
      <Route path="/flightBooking/:id" element={<FlightBooking />} />
      <Route path="/payment/:price" element={<Payment />} />
      <Route path="/flightpayment/:price" element={<FlightPayment />} />
      <Route path="/myprofile" element={<Profile />} />
      <Route path="/mytrips" element={<Trips />} />
      <Route path="/hotels/:id" element={<Hotel />} />
      <Route path="/hotels" element={<ProductPage />} />
      <Route path="/hotels/review/:id" element={<Review />} />
    </Routes>
  );
};
