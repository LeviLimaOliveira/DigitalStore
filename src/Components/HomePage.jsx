/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './HeaderComponents/Header'
import Carousel from './CarouselComponents/Carousel'
import style from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={style.homepage}>
      <Header />
      <Carousel />
    </div>
  )
}

export default HomePage
