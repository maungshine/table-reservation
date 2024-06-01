import { useState } from 'react'
import '../styles/booking-form.css'
import { z } from 'zod';
import { fetchAPI, submitApi } from '../data';
import { useNavigate } from 'react-router-dom';


const BookingFormSchema = z.object({
    date: z.string().trim().min(1, { message: "Required" }),
    time: z.string().trim().min(1, { message: "Required" }),
    guests: z.number().min(1, 'Guests must be at least one.').max(10, 'Less than 10 guests are allowed.'),
    occasion: z.string().trim().min(1, { message: "Required" })
})

function BookingForm({ setDate, availableTimes, dispatch }) {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 0,
        occasion: ''
    })
  return (
    <div style={{ width: '100%', display: 'flex',gap: '4rem', flexDirection: 'column',alignItems: 'start', justifyContent: 'center' }}>
        {availableTimes.length === 0 ? 
            <p style={{  color: 'red' }}>No Booking available for the choosing date</p>
            :
        <div className='tables'>
                <h3 style={{ color: 'var(--dark)' }}>Available Times</h3>
            <div className='booking-slots' role='list'>
                {availableTimes.map((time) => 
                <div className='slot' role='listitem'>
                    <span>{time}</span>
                </div>
                )}
            </div>
        </div>
        } 
        <form 
        data-testid='booking-form'
        style={{ display: 'grid', maxWidth: '600px',width: '100%', gap: '24px' }} 
        onSubmit={async (e) => {
            e.preventDefault()
            console.log(formData);
            const result = BookingFormSchema.safeParse({
                date: formData.date,
                time: formData.time,
                guests: formData.guests,
                occasion: formData.occasion
            })

            if(!result.success) {
                setErrors(result.error.flatten().fieldErrors)
                return
            }

            const res = await submitApi(result.data)

            if(res) {
                const data = await fetchAPI(result.data.date);

                dispatch({type: 'changeDate', newState: data})

                navigate('/booking-confirmation')
            }
            console.log('result: ', res)
        }}>
            <div className='form-item'>
                <label htmlFor="res-date">Choose date</label>
                <input 
                    aria-label='Choose date'
                    type="date"
                    id="res-date" 
                    data-testid='date'
                    name='date' 
                    value={formData.date} 
                    required
                    onChange={(e) => {
                        setDate(e.target.value);
                        setFormData({...formData, date: e.target.value});
                    }}
                    />
                    {errors.date && <p role='alert' style={{ color: 'red' }}>{errors.date.join(' ,')}</p>}
            </div>
            <div className='form-item'>
                <label htmlFor="res-time">Choose time</label>
                <select 
                    aria-label='select time'
                    id="res-time"
                    name='time'
                    value={formData.time}
                    required
                    data-testid='time-select'
                    onChange={(e) => setFormData({...formData, time: e.target.value })}
                    disabled={availableTimes.length === 0}
                    >
                   <option selected>Choose a time</option>

                        {availableTimes.map((time) => (

                    <option  data-testid='time' value={time} key={time}>{time}</option>
                        ))}
                </select>
                {errors.time && <p role='alert' style={{ color: 'red' }}>{errors.time.join(' ,')}</p>}
            </div>
            <div className='form-item'>
                <label htmlFor="guests">Number of guests</label>
                <input 
                    aria-label='Number of guests'
                    type="number" 
                    placeholder="1" 
                    min="1" 
                    max="10" 
                    id="guests"
                    data-testid='guest'
                    name='guests'
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    />
                    {errors.guests && <p role='alert' style={{ color: 'red' }}>{errors.guests.join(' ,')}</p>}

            </div>
            <div className='form-item'>
                <label htmlFor="occasion">Occasion</label>
                <select 
                aria-label='Occasion'
                id="occasion"
                name='occasion'
                value={formData.occasion}
                onChange={(e) => setFormData({...formData, occasion: e.target.value })}
                data-testid='occasion'
                required
                >   <option selected>Choose a occasion</option>
                    <option value='birthday'>Birthday</option>
                    <option value='anniversary'>Anniversary</option>
                    <option value="engagement">Engagement</option>
                    <option value="celebration">Celebration</option>
                </select>
                {errors.occasion && <p role='alert' style={{ color: 'red' }}>{errors.occasion.join(' ,')}</p>}

            </div>
            <button className='cta' role='button' data-testid='booking-form-submit' style={{ width: '240px' }} type="submit" >Make Your reservation</button>
        </form>
    </div>
  )
}

export default BookingForm