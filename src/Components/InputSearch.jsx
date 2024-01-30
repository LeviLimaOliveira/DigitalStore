/* eslint-disable no-unused-vars */
import React from 'react'
import style from './InputSearch.module.css'

const InputSearch = () => {
  return (
    <div>
        <input className={style.input} type="text" placeholder='Pesquisar produto...'/>
    </div>
  )
}

export default InputSearch