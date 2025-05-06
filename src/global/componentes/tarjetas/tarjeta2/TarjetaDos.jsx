import React from 'react'
import PropTypes from 'prop-types';

export const TarjetaDos = ({
    imagen,
    ubicacion,
    direccion,
}) => {
  return (
    <div>
        <img src={imagen} alt="imagen de tarjeta"  />
        <p><strong>{ubicacion}</strong></p>
        <p>{direccion}</p>
    </div>
  )
}

TarjetaDos.propTypes = {
    imagen: PropTypes.string,
    ubicacion: PropTypes.string,
    direccion: PropTypes.string,
  };