import HeroImage from '../assets/restaurantfood.jpg'
import '../styles/hero.css'
function Hero() {
  return (
    <section className='hero-section-container'>
      <div className='hero-section'>
        <div className='hero-text-container'>
            <h1 className='hero-title'>Little Lemon</h1>
            <h3 className='hero-subtitle'>Chicago</h3>
            <p className='hero-text'>
                We are a family own Mediterrannean restaurant,
                focused on traditional recipes served with a modern twist
            </p>
            <button className='hero-cta'>Reserve a Table</button>
        </div>
        <div className='hero-image-container'>
          <div className='hero-image-wrapper'>
              <img src={HeroImage} className='hero-image' alt='food on a plate carried by a waiter' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero