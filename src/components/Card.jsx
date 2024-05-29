import '../styles/card.css'
import { MdDeliveryDining } from 'react-icons/md'


function Card({ imageUrl, cardTitle, cardDescription }) {
  return (
    <div className='card'>
        <img className='card-image' src={imageUrl} alt="food plate" />
        <div className='card-content'>
            <h3 className='card-title'>{cardTitle}</h3>
            <p className='card-description'>
            {cardDescription}
            </p>
            <a href="#" className='card-link'><span>Order a delivery</span> <MdDeliveryDining className='deli-icon' /></a>
        </div>
    </div>
  )
}

export default Card