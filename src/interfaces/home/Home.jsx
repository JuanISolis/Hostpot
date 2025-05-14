import React from 'react'
import cofiber from '../../assets/cofiber.png'
import { CardsGrid } from '../../global/componentes/CardsGrid/CardsGrid'
import style from './Home.module.css'
export const Home = () => {
  return (
    <div className={style.home}>

      <h1>Hostpot</h1>
      <h2>Somos un equipo dedicado a las telecomunicaciones, brindado conexiones de forma domiciliaria por fibra óptica y por red Wireless en lugares estratégicos.</h2>

      <CardsGrid />

    </div>
  )
}
