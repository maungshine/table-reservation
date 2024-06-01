import HeroImage from '../assets/restaurantfood.jpg'
import GreekSalad from '../assets/greek-salad.jpg'
import '../styles/about.css'

function About() {
  return (
    <section className='about-section-container'>
      <div className='about-section'>
        <div className='about-left'>
            <h1 className='about-title'>Little Lemon</h1>
            <h3 className='about-subtitle'>Chicago</h3>
            <p className='about-text'>
                We are a family own Mediterrannean restaurant,
                focused on traditional recipes served with a modern twist
            </p>
        </div>
        <div className='about-right'>
          <div className='about-image-container'>
            <img className='about-image' src={HeroImage} alt='food on a plate carried by a waiter' />
          </div>
          <div className='about-image-container about-image-overlap'>
            <img className='about-image' src={GreekSalad} alt='food on a plate carried by a waiter' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About