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
          <p>Estamos ubicados junto al cuerpo de Bomberos, Barrio Eloy Alfaro
          </p>
        </div>
      </div>
      <div className={style.footerContener__cel}>
        <AiTwotonePhone />
        <p>
          0960235572
        </p>
      </div>
      <div className={style.footerContener__atencion}>
        <AiTwotoneProfile />
        <p>Atención: Lunes a Sabado 8:00 am a 17:30 pm</p>
      </div>

    </div>
  )
}
