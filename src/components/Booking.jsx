import { useEffect, useLayoutEffect, useReducer, useState } from 'react'
import '../styles/booking.css'
import BookingForm from './BookingForm'
import { fetchAPI, store } from '../data';



function Booking() {
    const [date, setDate] = useState(new Date().toLocaleDateString());

    const updateTimes = (state , action) => {
        if(action.type === 'changeDate') {
            console.log('inside useReducer', action.newState)
            return action.newState
        }
    };
    const [availableTimes, dispatch] = useReducer(updateTimes, [])

    useEffect(() => {
        store()
    }, [])


    useEffect(() => {
        const getBooking = async () => {
            const result = await fetchAPI(date);
            return result
        }

        getBooking().then(data => {
            dispatch({type: 'changeDate', newState: data})
        })
    }, [date])


  return (
    <main className="booking-page">
        <section className='booking-section'>
        <h1 className='booking-title'>Reserve a Table</h1>
        <BookingForm setDate={setDate} availableTimes={availableTimes} dispatch={dispatch} />
        </section>
    </main>
  )
}

export default Booking