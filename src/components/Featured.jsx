import Card from "./Card"
import GreekSalad from '../assets/greek-salad.jpg'
import Bruchetta from '../assets/bruchetta.jpg'
import LemonCake from '../assets/lemon-dessert.jpg'

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
    <section>
        <div>
            <h2>This Week specials!</h2>
            <button>Online Menu</button>
        </div>
        {menu.map((item) => (
            <Card key={item.id} imageUrl={item.imgUrl} cardTitle={item.cardTitle} cardDescription={item.cardDescription} />
        ))}
    </section>
  )
}

export default Featured