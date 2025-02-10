import React from 'react'
import Header from './components/Header/page' 
import Footer from './components/Footer/page'
import WhatsAppButton from './components/WhatsppComponent/page'
import Carousel from './components/Carousel/page'
import Category from './components/Category/page'
import AllProducts from './components/AllProducts/page'

function Home() {
  return (
    <div>
      <Header />
      <Carousel /> 
      <Category />
      <AllProducts />
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

export default Home