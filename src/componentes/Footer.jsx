import { AiTwotoneEnvironment } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";
import { AiTwotoneProfile } from "react-icons/ai";
import style from "./footer.module.css"

export const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerContener__adress}>
        <div className={style.footerContener__place}>
          <AiTwotoneEnvironment />
          <p>Cuerpo de Bomberos, Barrio Eloy Alfaro
          </p>
        </div>
        <div className={style.row}></div>
      </div>
      <div className={style.footerContener__cel}>
        <AiTwotonePhone />
        <p>
          0960235572
        </p>
      </div>
      <div className={style.row}></div>
      <div className={style.footerContener__atencion}>
        <AiTwotoneProfile />
        <p>Atención: Lunes a Sabado 8:00 am a 17:30 pm</p>
      </div>
      <div className={style.row}></div>
    </div>
  )
}
