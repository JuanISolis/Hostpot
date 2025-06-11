

import { Robot } from '../componentes/3d/Robot'
import { CarrouselSwiper } from '../componentes/carrousel/CarrouselSwiper'
import { CarrouselSwiperHOME } from '../componentes/CarrouselSwiperHOME/CarrouselSwiperHOME'
import { Footer } from '../componentes/Footer'


export const HomeScreen = () => {
    return (
        <>
            <Robot />
            <CarrouselSwiperHOME />
            <Footer />
        </>
    )
}
