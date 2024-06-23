import React from 'react'
import Hero from '../Components/Hero/Hero.js'
import Popular from '../Components/Popular/Popular.js'
import Offers from '../Components/Offers/Offers.js'
import NewCollections from '../Components/NewCollections/NewCollections.js'
import NewsLetter from '../Components/NewsLetter/NewsLetter.js'

const Shop = () => {
  return (
    <>
      <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
      </div>
    </>
  )
}

export default Shop