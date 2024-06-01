import Header from "./Header"
import '../styles/navbar.css';
import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

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
                 role="button"
            />
            <ul className="nav-link-group">
                <li>
                    <NavLink className={({ isActive }) => {
                        return isActive ? "active" : "";
                        }} to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) => {
                        return isActive ? "active" : "";
                        }}  to={'/booking'} 
                        >Reserve Now</NavLink>
                </li>
            </ul>
            <div className="menu-link-group" style={{ display: open ? '': 'none' }}>

                <RxCross1 
                onClick={() => setOpen(prev => !prev)}
                style={{ 
                    cursor: 'pointer',
                }}
                className="cross-icon"
                role="button"
                />

                <ul >
                    <li>
                        <NavLink className={({ isActive }) => {
                        return isActive ? "active" : "";
                        }} to={'/'} onClick={() => setOpen(prev => !prev)} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => {
                        return isActive ? "active" : "";
                        }} to={'/booking'} onClick={() => setOpen(prev => !prev)} >Reserve Now</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar