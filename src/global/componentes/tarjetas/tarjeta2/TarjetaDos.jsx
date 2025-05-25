import React from 'react'
import PropTypes from 'prop-types';

export const TarjetaDos = ({
  ubicacion,
  direccion,
}) => {
  return (
    <div>

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