import React from 'react'
import './App.css'
import Navbar from './assets/Navbar'
import Hero from './assets/Hero'
import Bottomnav from './assets/Dock'
import Catagory from './assets/Catagory'
import Occasion from './assets/Occasion'
import Why from './assets/Why'
import Bestsellers from './assets/Bestsellers'
import Printtype from './assets/Printtype'
import Fabric from './assets/Fabric'
import FAQ from './assets/Faq'
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Bottomnav/>
      <Catagory/>
      <Occasion/>
      <Fabric/>
      <Why/>
      <Bestsellers/>
      <Printtype img="/p1.webp"/>
      <Printtype img="/p2.webp"/>
      <Printtype img="/p3.webp"/>
      <FAQ/>
    </>
  )
}

export default App;
