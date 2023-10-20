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
import Middle from './pages/preachings/Middle'

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
      <Route path='/preach/:id' element={<Preach />}/>
      <Route path='/preachings' element={<Middle />}/>
      <Route path='/preachings/:page' element={<Preachings />}/>
      <Route path='/create-preach' element={<CreatePreach />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
