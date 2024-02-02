/* eslint-disable no-unused-vars */
import React from 'react'
import style from '../CarouselComponents/Carousel.module.css'
import tenis from '../../assets/Tenis.png'
import Ornament from '../../assets/Ornament.png'
import Group from '../../assets/Group.png'

const Carousel = () => {
  return (
    <>
    <div className={style.carousel}>
      <div className={style.divflex}>
          <div className={style.div1}>
            <div>
              <h6 className={style.mof}>Melhores ofertas personalizadas</h6>
            </div>
            <div>
              <h1 className={style.h1}>Queima de<br/> stoque Nike 🔥</h1>
            </div>
            <div className={style.descricao}>
              <h6>Consequat culpa exercitation mollit nisi excepteur do<br/> do tempor laboris eiusmod irure consectetur.</h6>
            </div>
            <br/>
            <div>
              <button className={style.button}>Ver ofertas</button>
              </div>
          </div>
          <div className={style.To}>
            <div>
              <img className={style.tenis} src={tenis} alt="Foto de um tênis"/>
            </div>
            <div>
              <img className={style.Ornament} src={Ornament} alt="Ornamento" />
            </div>
          </div>
      </div> 
      <div>
        <div className={style.divflex2}>
          <img  src={Group} alt="Grupo" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Carousel