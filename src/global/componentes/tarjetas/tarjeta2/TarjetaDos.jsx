import React from 'react'
import PropTypes from 'prop-types';
import './tarjetados.css'

export const TarjetaDos = ({
    imagen,
    ubicacion,
    direccion,
}) => {
  return (
    <div className='cointener-tjdos'>
      <img src={imagen} alt="imagen de tarjeta" className='img-trjdos'/>
      <p className='ubicacion'><strong>{ubicacion}</strong></p>
      <p className='direccion'>{direccion}</p>
    </div>
  )
}

TarjetaDos.propTypes = {
    imagen: PropTypes.string,
    ubicacion: PropTypes.string,
    direccion: PropTypes.string,
  };