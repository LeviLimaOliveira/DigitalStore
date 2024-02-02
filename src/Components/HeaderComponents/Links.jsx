/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './Home'
import Produtcs from './Products'
import Categories from './Categories'
import MyRequests from './MyRequests'
import style from './Links.module.css'

const Links = () => {
  return (
    <div className={style.links}>
        <Home />
        <Produtcs />
        <Categories />
        <MyRequests />
    </div>
  )
}

export default Links