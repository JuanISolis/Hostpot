import PropTypes from "prop-types";

export const TarjetaUno = ({
  imagen,
  descripcion,
  punto1, punto1a,
  punto2, punto2a,
  punto3, punto3a,
  punto4, punto4a,
  punto5, punto5a,
  punto6, punto6a,
  punto7, punto7a,
  punto8, punto8a,
  punto9, punto9a,
  punto10, punto10a,
  punto11, punto11a,
  punto12, punto12a,
  punto13, punto13a,
  precio,
}) => {
  return (
    <div>
        <img src={imagen} alt="imagen de tarjeta"  />
        <p>{descripcion}</p>
        <p><strong>{punto1}</strong> {punto1a}</p>
        <p><strong>{punto2}</strong> {punto2a}</p>
        <p><strong>{punto3}</strong> {punto3a}</p>
        <p><strong>{punto4}</strong> {punto4a}</p>
        <p><strong>{punto5}</strong> {punto5a}</p>
        <p><strong>{punto6}</strong> {punto6a}</p>
        <p><strong>{punto7}</strong> {punto7a}</p>
        <p><strong>{punto8}</strong> {punto8a}</p>
        <p><strong>{punto9}</strong> {punto9a}</p>
        <p><strong>{punto10}</strong> {punto10a}</p>
        <p><strong>{punto11}</strong> {punto11a}</p>
        <p><strong>{punto12}</strong> {punto12a}</p>
        <p><strong>{punto13}</strong> {punto13a}</p>
        <p><strong>${precio}</strong> </p>
    </div>
  )
}

TarjetaUno.propTypes = {
    imagen: PropTypes.string,
    descripcion: PropTypes.string,
    punto1: PropTypes.string,
    punto1a: PropTypes.string,
    punto2: PropTypes.string,
    punto2a: PropTypes.string,
    punto3: PropTypes.string,
    punto3a: PropTypes.string,
    punto4: PropTypes.string,
    punto4a: PropTypes.string,
    punto5: PropTypes.string,
    punto5a: PropTypes.string,
    punto6: PropTypes.string,
    punto6a: PropTypes.string,
    punto7: PropTypes.string,
    punto7a: PropTypes.string,
    punto8: PropTypes.string,
    punto8a: PropTypes.string,
    punto9: PropTypes.string,
    punto9a: PropTypes.string,
    punto10: PropTypes.string,
    punto10a: PropTypes.string,
    punto11: PropTypes.string,
    punto11a: PropTypes.string,
    punto12: PropTypes.string,
    punto12a: PropTypes.string,
    punto13: PropTypes.string,
    punto13a: PropTypes.string,
    precio: PropTypes.string,
  };


