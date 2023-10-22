import { Link, Routes, Route } from "react-router-dom"
import { Home, Contact, Portfolio, About } from "./components"
import { useSelector } from "react-redux"

function App() {
  const {user} = useSelector(state => state.user)

  return (
    <>
      <ul className='flex gap-4 justify-center my-3'>
        <Link to="/">Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/contact'>Contact</Link>
        <Link to=''>{user} Logged In</Link>
      </ul>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
