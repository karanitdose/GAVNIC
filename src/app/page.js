import React from 'react'
import Header from './components/Header/page' 
import Footer from './components/Footer/page'
import WhatsAppButton from './components/WhatsppComponent/page'
import Carousel from './components/Carousel/page'

function Home() {
  return (
    <div>
      <Header />
      <Carousel /> 
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

export default Home