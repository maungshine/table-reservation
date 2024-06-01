import { FaCheckCircle } from "react-icons/fa"

function BookingConfirmation() {
  return (
    <main className="booking-confirmation-section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
        <p style={{ fontSize: '42px'}}>The table is reserved for you</p>
        <FaCheckCircle style={{ color: 'green', fontSize: '64px' }} />
    </main>
  )
}

export default BookingConfirmation