import React from 'react'
import './App.css'
import Navbar from './assets/Navbar'
import Hero from './assets/Hero'
import Catagory from './assets/Catagory'
import Occasion from './assets/Occasion'
import Why from './assets/Why'
import Bestsellers from './assets/Bestsellers'
import Printtype from './assets/Printtype'
import Fabric from './assets/Fabric'
import FAQ from './assets/Faq'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Catagory/>
   <Occasion/>
    <Fabric/>
    <Why/> 
    <Bestsellers/>
    <Printtype print="Solid" img="/p1.webp"/>
    <Printtype print="Floral" img="/p2.webp"/>
    <Printtype print="Indie" img="/p3.webp"/>
    <FAQ/>

  </>
  )
}

export default Home