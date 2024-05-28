import Header from "./Header"


function Navbar() {
  return (
    <nav>
        <Header />
        <ul>
            <li>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Menu
            </li>
            <li>
                Reservations
            </li>
            <li>
                Order Online
            </li>
            <li>
                Login
            </li>
        </ul>
    </nav>
  )
}

export default Navbar