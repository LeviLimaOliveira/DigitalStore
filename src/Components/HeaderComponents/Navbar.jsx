/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from './Logo'
import InputSearch from './InputSearch'
import Register from './Register'
import Button from './ButtonEntrar'
import BuyCar from './Buy'
import style from './navbar.module.css'
export const Navbar = () => {
  return (
    <div className={style.navbar}>
    <Logo />
    <InputSearch />
    <Register />
    <Button />
    <BuyCar />
    </div> 
  )
}

export default Navbar
