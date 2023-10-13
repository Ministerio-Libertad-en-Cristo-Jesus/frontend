import { Route, Routes } from 'react-router-dom'
import Navbar from './layouts/navbar/Navbar'
import Home from './pages/home/Home'
import AboutUs from './pages/aboutUs/AboutUs'
import Prayers from './pages/prayers/Prayers'
import Offering from './pages/offering/Offering'
import Preachings from './pages/preachings/Preachings'
import Contact from './pages/contact/Contact'
import Sidepanel from './layouts/sidepanel/Sidepanel'
import Footer from './layouts/footer/Footer'
import CreatePreach from './pages/CreatePreach'
import Preach from './pages/preach/Preach'

function App () {
  return (
    <>
    <Sidepanel />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/aboutus' element={<AboutUs />}/>
      <Route path='/prayers' element={<Prayers />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/offering' element={<Offering />}/>
      <Route path='/preachings' element={<Preachings />}/>
      <Route path='/preachings/:id' element={<Preach />}/>
      <Route path='/create-preach' element={<CreatePreach />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
