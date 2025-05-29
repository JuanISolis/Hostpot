
import { Footer } from "../componentes/Footer"
import { Header } from "../componentes/Header"
import style from "./hostpot.module.css"
import { Main } from "../componentes/Main"

export const HostpotApp = () => {
  return (
    <div className={style.hostpotApp}>
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  )
}
