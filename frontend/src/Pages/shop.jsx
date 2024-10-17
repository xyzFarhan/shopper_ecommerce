import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Collections from '../Components/NewCollections/Collections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'



const shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Collections/>
      <NewsLetter/>

    </div>
  )
}

export default shop
