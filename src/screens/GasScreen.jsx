
import { CardGas } from '../componentes/GasCard/CardGas'
import dataCards from "../data/gasData"
import style from "./gasScreen.module.css"

export const GasScreen = () => {
  return (
    <>
      <div className={style.screenGas}>
        <CardGas dataCards={dataCards.lugaresPrimera} title={"Lunes Urbano"} />
        <CardGas dataCards={dataCards.lugaresSegunda} title={"Martes Urbano"} />
        <CardGas dataCards={dataCards.lugaresTercera} title={"Miercoles Urbano"} />
        <CardGas dataCards={dataCards.lugaresCuarta} title={"Jueves Urbano"} />
        <CardGas dataCards={dataCards.lugaresQuinta} title={"Viernes Urbano"} />
        <CardGas dataCards={dataCards.lugaresSexta} title={"Sabado Urbano"} />
        <CardGas dataCards={dataCards.lugaresSeptima} title={"DomingoUrbano"} />
      </div>
    </>
  )
}
