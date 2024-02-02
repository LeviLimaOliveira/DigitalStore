/* eslint-disable no-unused-vars */
import React from 'react'
import BuyCar from '../../assets/Buy.png'
import style from './Buy.module.css'

const Buy = () => {
  return (
    <div>
        <img className={style.buy} src={BuyCar} alt="Shopping cart" />
    </div>
  )
}

export default Buy