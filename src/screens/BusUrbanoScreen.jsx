
import style from "./BusUrbanoScreen.module.css"
import dataBusUrbano from "../data/dataBusUrbano"
import { BusCard } from "../componentes/Bus/BusCard"

export const BusUrbanoScreen = () => {
    return (
        <div className={style.BusUrbanoScrenn}>
            <BusCard dataCards={dataBusUrbano.busUrbanoLinea1} />
            <BusCard dataCards={dataBusUrbano.busUrbanoLinea2} />
            <BusCard dataCards={dataBusUrbano.busUrbanoLinea3} />
            <BusCard dataCards={dataBusUrbano.busUrbanoLinea4} />
            <BusCard dataCards={dataBusUrbano.busUrbanoLinea5} />
            <BusCard dataCards={dataBusUrbano.busUrbanoLinea6} />
            <BusCard dataCards={dataBusUrbano.busUrbanoLinea7} />
        </div>
    )
}
