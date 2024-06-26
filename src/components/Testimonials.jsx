import TestimonialCard from "./TestimonialCard"
import Sarah from '../assets/sarah.jpg'
import Kevin from '../assets/kevin.jpg'
import Smith from '../assets/smith.jpg'
import Monica from '../assets/monica.jpg'
import '../styles/testimonials.css'

const menu = [
    {
        id: '1',
        imgUrl: Sarah,
        name: 'Sarah',
        message: 'Excellent dining experience!',
        rating: 5
    },
    {
        id: '2',
        imgUrl: Kevin,
        name: 'Kevin',
        message: 'Delicious Food and great service!',
        rating: 5
    },
    {
        id: '3',
        imgUrl: Smith,
        name: 'Smith',
        message: 'Really love the food and environment.',
        rating: 5
    },
    {
        id: '4',
        imgUrl: Monica,
        name: 'Monica',
        message: 'Nice place to visit!',
        rating: 5
    }
]

function Testimonials() {
  return (
    <section className="testimonials-section-container">
        <div className="testimonials-section">
            <h2 className="testimonials-title">Testimonials</h2>
            <div className="testimonials-content">
                <div className="track">
                    {menu.map((item) => (
                    <TestimonialCard key={item.id} imageUrl={item.imgUrl} name={item.name} message={item.message} rating={item.rating} />
                    ))}
                    {menu.map((item) => (
                    <TestimonialCard key={item.id} imageUrl={item.imgUrl} name={item.name} message={item.message} rating={item.rating} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
