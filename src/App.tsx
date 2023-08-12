import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import AboutUs from './pages/aboutUs/AboutUs'
import Prayers from './pages/prayers/Prayers'
import Offering from './pages/offering/Offering'
import Preachings from './pages/preachings/Preachings'
import Contact from './pages/contact/Contact'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/aboutus' element={<AboutUs />}/>
      <Route path='/prayers' element={<Prayers />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/offering' element={<Offering />}/>
      <Route path='/preachings' element={<Preachings />}/>
    </Routes>
  )
}

export default App
