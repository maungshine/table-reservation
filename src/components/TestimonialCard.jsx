import { FaStar } from 'react-icons/fa'
import '../styles/testimonialCard.css'

function TestimonialCard({ imageUrl, name, rating, message }) {
  return (
    <div className='testimonial-card'>
      <p>Rating: {rating} <FaStar className='rating-icon' /></p>
      <div className='testimonials-card-content'>
        <div className='testimonials-card-left'>
            <div className="testimonial-image-container">
              <img src={imageUrl} className="testimonial-image" alt="profile image" />
            </div>
        </div>
        <div className='testimonials-card-right'>
            <p>{name}</p>
        </div>
      </div>
        <p className='testimonial-message'>{message}</p>
    </div>
  )
}

export default TestimonialCard