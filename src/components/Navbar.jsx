import Header from "./Header"
import '../styles/navbar.css';
import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

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
        </div>
    </nav>
  )
}

export default Navbar