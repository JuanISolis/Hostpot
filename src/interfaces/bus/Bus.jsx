import React from 'react'
import {TarjetaUno} from '../../global/componentes/tarjetas/tarjeta1/TarjetaUno'
import './bus.css'

export const Bus = () => {
  return (
    <div className='conteiner-tarjet'>
      <TarjetaUno
        imagen = "../../assets/1.png"
        descripcion ="Recorrido cada 30 minutos"
        punto1 ="B. Las Vegas"
        punto1a ="Calle 1A"
        punto2 ="B. Zeneyda"
        punto2a = "Calle 3B"
        punto3 = "B. Central"
        punto3a = "Av. Unidad Nacional"
        punto4 = "B.Toritos"
        punto4a = "Av. Aguarico 3"
        punto5 = "B. Toritos"
        punto5a = "Parada Camal"
        precio ="0.30"
      />
    </div>
  )
}
