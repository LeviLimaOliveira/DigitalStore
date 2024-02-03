/* eslint-disable no-unused-vars */
import React from 'react'
import style from './Links.module.css'

const menuLinks = [
  "Home",
  "Produtos",
  "Categorias",
  "Meus Pedidos"
]

const Links = () => {
  return (
    <div className={style.links}>
    {menuLinks.map((item) => (
        <div><a href="#">{item}</a></div>
    ))}
    </div>
  )
}

export default Links