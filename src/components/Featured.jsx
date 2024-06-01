import Card from "./Card"
import GreekSalad from '../assets/greek-salad.jpg'
import Bruchetta from '../assets/bruchetta.jpg'
import LemonCake from '../assets/lemon-dessert.jpg'
import '../styles/featured.css'

const menu = [
    {
        id: '1',
        imgUrl: GreekSalad,
        cardTitle: 'Greek salad',
        cardDescription: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
        id: '2',
        imgUrl: Bruchetta,
        cardTitle: 'Bruchetta',
        cardDescription: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
    {
        id: '3',
        imgUrl: LemonCake,
        cardTitle: 'Lemon Cake',
        cardDescription: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
    }
]

function Featured() {
  return (
    <section className="featured-section-container">
        <div className="featured-section">
            <div className="featured-heading">
                <h2 className="featured-title">This Week specials!</h2>
                <button role="button" className="cta cta-desktop">Online Menu</button>
            </div>
            <div className="featured-content">
            {menu.map((item) => (
                <Card key={item.id} imageUrl={item.imgUrl} cardTitle={item.cardTitle} cardDescription={item.cardDescription} />
            ))}
            </div>
            <button role="button" className="cta cta-mobile">Online Menu</button>
        </div>
    </section>
  )
}

export default Featured