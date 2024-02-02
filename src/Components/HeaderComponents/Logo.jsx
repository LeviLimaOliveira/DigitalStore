/* eslint-disable no-unused-vars */
import React from 'react'
import LogoSite from '../../assets/logo.png'
import style from './Logo.module.css'

const Logo = () => {
  return (
  <div className={style.flexLogo}>
    <div className={style.imgLogo}>
      <img src={LogoSite} alt="logo" />
    </div>
    <div>
      <h2 className={style.Logo}>Digital Store</h2>
    </div>
  </div>

  )
}
export default Logo