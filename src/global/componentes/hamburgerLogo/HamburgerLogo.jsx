import React from 'react'
import style from "./hamburger.module.css"
import hamb from "../../../assets/hamburger.svg"
export const HamburgerLogo = () => {
    return (
        <img src={hamb} alt="hamburger" className={style.HamburgerLogo} />
    )
}
