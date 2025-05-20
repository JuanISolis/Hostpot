import React from 'react'

import { Main } from '../global/layouts/main/Main'
import { Footer } from '../global/layouts/footer/Footer'
import { Header } from '../global/componentes/header/Header'
import AnimatedHeader from '../global/componentes/heroAnimate/AnimatedHeader'
import Carousel from '../global/componentes/carrousel/Carousel'

export const Ruta = () => {
  return (
    <div>
      <Header />
      <AnimatedHeader />
      <Main />
      {/* <Carousel /> */}
      <Footer />
    </div>
  )
}
