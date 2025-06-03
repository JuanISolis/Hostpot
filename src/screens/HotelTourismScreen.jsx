import style from "./hotelTourismScreen.module.css"
import imgHotel1 from "../assetsCris/hotel/hotel1.jpeg"
import imgHotel2 from "../assetsCris/hotel/hotel2.jpeg"
import imgHotel3 from "../assetsCris/hotel/hotel3.jpeg"
import AnimatedHero from "../componentes/heroAnimate/AnimatedHero"
import { Footer } from "../componentes/Footer"

export const HotelTourismScreen = () => {
  return (
    <div className={style.HotelTourismScreen}>
      <AnimatedHero />
      <div className={style.cardHotel}>
        <img src={imgHotel1} alt="imagen de hotel 1" />
        <p>shushufindi central</p>
        <p>avenida unidad nacional y xxx</p>
      </div>
      <div className={style.cardHotel}>
        <img src={imgHotel2} alt="imagen de hotel 2" />
        <p>shushufindi , Barrio Eloy Alfaro </p>
        <p>Calle Siona Y Calle 3B</p>
      </div>
      <div className={style.cardHotel}>
        <img src={imgHotel3} alt="imagen de hotel 3" />
        <p>shushufindi, 7 DE junio</p>
        <p>frente al control Policial</p>
      </div>
      <Footer />
    </div>
  )
}
