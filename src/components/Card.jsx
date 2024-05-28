
import { MdDeliveryDining } from 'react-icons/md'


function Card({ imageUrl, cardTitle, cardDescription }) {
  return (
    <div>
        <img src={imageUrl} alt="food plate" />
        <div>
            <h3>{cardTitle}</h3>
            <p>
            {cardDescription}
            </p>
            <a href="#">Order a delivery <MdDeliveryDining /></a>
        </div>
    </div>
  )
}

export default Card