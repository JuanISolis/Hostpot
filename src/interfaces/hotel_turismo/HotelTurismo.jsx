import React from 'react'
import {TarjetaDos} from '../../global/componentes/tarjetas/tarjeta2/TarjetaDos'
import './hotelturismo.css'

export const HotelTurismo = () => {
  return (
    <div className='conteiner-tj'>
      <TarjetaDos
        imagen = "../../assets/UNO.png"
        ubicacion ="Shushufindi, Barrio Eloy Alfaro"
        direccion ="Calle Siona y Calle 3B"
      />
    </div>
  )
}
