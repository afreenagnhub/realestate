import React from 'react'
import Hero from './sections/Hero'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './sections/About'
import { DarkModeProvider } from './components/DarkModeContext'
import PopularAreas from './sections/PopularAreas'
import Properties from './sections/Properties'
import Services from './sections/Services'
import Client from './sections/Client'
import Contact from './sections/Contact'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Aboutp from './pages/Aboutp'
import ContactDetail from './pages/ContactDetail'
import PropertyList from './pages/PropertyList'
import PropertiesDetail from './pages/PropertiesDetail'
import { property } from './components/export'
import ServiceDetail from './pages/ServiceDetail'
import ServiceList from './pages/ServiceList'
const App = () => {
  return (
<DarkModeProvider>
  <Router>
    <div className='min-h-screen'>
      <Header/>
      {/* Home page */}
      <Routes>
        <Route path="/" element={
          <>
          <Hero/>
          <About/>
          <PopularAreas/>
          <Properties/>
          <Services/>
          <Client/>
          <Contact/>
          </>
          }/>
          {/* About page */}
          <Route path="/aboutp" element={<Aboutp />}/>
          <Route path="/contactdetail" element={<ContactDetail />}/>
          <Route path='/properties' element={<PropertyList/>}/>
          <Route path="/property/:id" element={<PropertiesDetail properties={property}/>}/>
          <Route path='/services' element={<ServiceList/>}/>
          <Route path="/service/:id" element={<ServiceDetail/>}/>
      </Routes>
      <Footer/>
    </div>
  </Router>
</DarkModeProvider>
  )
}

export default App