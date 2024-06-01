import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from "./error-page";
import Main from './components/Main.jsx';
import Booking from './components/Booking.jsx';
import BookingConfirmation from './components/BookingConfirmation.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="booking" element={<Booking />} />
          <Route path="booking-confirmation" element={<BookingConfirmation />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
