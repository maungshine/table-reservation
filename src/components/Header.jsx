import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'

function Header() {
  return (
    <header>
        <Link to={'/'}>
          <img src={Logo} alt="Logo" />
        </Link>
    </header>
  )
}

export default Header