
import './App.css'


import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import PaketInternet from './components/PaketInternet'
import Keunggulan from './components/Keunggulan'
import CaraBeli from './components/CaraBeli'
import Testimoni from './components/ Testimoni'
import Kontak from './components/ Kontak'
import Footer from './components/Footer'




function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <PaketInternet />
    <Keunggulan />
    <CaraBeli />
    <Testimoni />
    <Kontak />
    <Footer />


    </>
  )
}

export default App