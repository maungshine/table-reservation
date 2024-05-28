import Header from "./Header"
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav>
        <div className="nav-content">
            <Header />
            <ul className="nav-link-group">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">Reservations</a>
                </li>
                <li>
                    <a href="#">Order Online</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar