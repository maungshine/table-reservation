import '../styles/footer.css'
import footerLogo from '../assets/footer-logo.png'

function Footer() {
  return (
    <footer>
      <div className='footer-section'>
        <div className='footer-logo-container'>
          <img className='footer-logo' src={footerLogo} alt="footer logo" />
        </div>
        <div className='footer-nav'>
          <div className='footer-nav-group'>
            <h3 className='footer-nav-header'>Doormat Navigation</h3>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Menu</a>
            <a href="#">Reservations</a>
            <a href="#">Order Online</a>
            <a href="#">Login</a>
          </div>
          <div className='footer-nav-group'>
            <h3 className='footer-nav-header'>Contact</h3>
            <a href="#">Address</a>
            <a href="#">Phone number</a>
            <a href="#">Email</a>
          </div>
          <div className='footer-nav-group'>
            <h3 className='footer-nav-header'>Social Media Links</h3>
            <a href="#">Address</a>
            <a href="#">Phone number</a>
            <a href="#">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer