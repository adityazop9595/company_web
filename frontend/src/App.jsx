import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Routes ,Route, useLocation } from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import PageHeader from './components/PageHeader'
import NotFound from './pages/NotFound'
import SmoothScroll from './features/utiles/animation/SmoothScroll'
import Service from './pages/Service'
import GetStartedSection from './components/BitContent/GetStartedSection'
import ContectSection from './components/BitContent/ContectSection'
import Cursor from './components/Cursor'
import { useEffect } from 'react'
import ScrollToTop from './features/utiles/ScrollToTop'
import ApForm from './components/BitContent/ApForm'
import PrivacyPolicy from './components/BitContent/PrivacyPolicy'
import BookAp from './components/BitContent/BookAp'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
    // let location=useLocation();
  // let a=window.scrollY;
 
  const hideHeaderOn = ['/','*']; // list of paths where PageHeader shouldn't show

  return (
    <>
    <ScrollToTop/>
    <Cursor/>
    <SmoothScroll>
    <Navbar/>
 {!hideHeaderOn.includes(location.pathname) && <PageHeader />}
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/services'element={<Service/>}/>
      <Route path='/privacy-policy'element={<PrivacyPolicy/>}/>
      <Route path='/book-appointment'element={<BookAp/>}/>



      <Route path='*' element={<NotFound/>}/>

    </Routes>
   
    
    <Footer/>
    <ApForm/>
</SmoothScroll>
    </>
  )
}

export default App;
