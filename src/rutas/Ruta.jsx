
import { Main } from '../global/layouts/main/Main'
import { Footer } from '../global/layouts/footer/Footer'
import { Header } from '../global/componentes/header/Header'
import AnimatedHeader from '../global/componentes/heroAnimate/AnimatedHeader'
import { Robot } from '../global/componentes/3d/robot'
export const Ruta = () => {
  return (
    <div className='containerApp'>
      <Header />
      <AnimatedHeader />
      <Main />

      <Footer />
    </div>
  )
}
