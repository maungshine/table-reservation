import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar />
      <div id='main'>
          <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
