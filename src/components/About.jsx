import HeroImage from '../assets/restaurantfood.jpg'


function About() {
  return (
    <section>
        <div>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
                We are a family own Mediterrannean restaurant,
                focused on traditional recipes served with a modern twist
            </p>
        </div>
        <div>
            <img src={HeroImage} alt='food on a plate carried by a waiter' />
            <img src={HeroImage} alt='food on a plate carried by a waiter' />
        </div>
    </section>
  )
}

export default About