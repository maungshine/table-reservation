import Header from "./Header"
import '../styles/navbar.css';
import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar() {
    const [open , setOpen] = useState(false);
  return (
    <nav>
        <div className="nav-content">
            <Header />
            <RxHamburgerMenu 
                onClick={() => setOpen(prev => !prev)}
                style={{ 
                    cursor: 'pointer',
                 }}
                 className="hamburger-icon"
            />
            <ul className="nav-link-group">
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/booking'}>Reservations</Link>
                </li>
            </ul>
            <div className="menu-link-group" style={{ display: open ? '': 'none' }}>

                <RxCross1 
                onClick={() => setOpen(prev => !prev)}
                style={{ 
                    cursor: 'pointer',
                }}
                className="cross-icon"
                />

                <ul >
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Reservations</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar