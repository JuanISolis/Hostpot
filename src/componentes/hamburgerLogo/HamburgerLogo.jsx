

import ImageHamburger from "../../assetsCris/header/hamburger.svg"
import style from "./hamburger.module.css"

export const HamburgerLogo = () => {
    return (
        <img src={ImageHamburger} alt="ImageHamburger" className={style.HamburgerLogo} />
    )
}
