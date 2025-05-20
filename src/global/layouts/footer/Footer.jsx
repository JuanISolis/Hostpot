import React from 'react'
import style from "./footer.module.css"
export const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerContener__adress}>
        <div className={style.footerContener__place}>
          <p>ll</p>
          <p>Estamos ubicados junto al cuerpo de Bomberos, Barrio Eloy Alfaro
          </p>
        </div>
      </div>
      <div className={style.footerContener__cel}>
        <p>C</p>
        <p>
          0960235572
        </p>
      </div>
      <p>Atención: Lunes a Sabado 8:00 am a 17:30 pmk</p>
    </div>
  )
}
