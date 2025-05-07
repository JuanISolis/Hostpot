import React from 'react'
import cofiber from '../../assets/cofiber.png'
import Carrusel from './carrusel_home/Carrusel'
import './home.css'

export const Home = () => {
  return (
    <div>
      <img src={cofiber} alt="Logo"/>
      <h1>Internet por Fibra Óptica</h1>

      <h4 className='text-inicial'>
        Somos un equipo especializado en telecomunicaciones, comprometido con ofrecerte conexiones rápidas, 
        estables y seguras a través de fibra óptica y redes inalámbricas (Wireless), diseñadas estratégicamente 
        para llegar justo donde nos necesitas. 
        <br></br>
        <br></br>
        Ya sea en zonas urbanas o rurales, brindamos soluciones eficientes y adaptadas a cada entorno, 
        garantizando una cobertura confiable y un servicio que evoluciona contigo.
      </h4>

      <Carrusel/>

      
    </div>
  )
}
