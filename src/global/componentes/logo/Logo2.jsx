import React from 'react'
import style from "./logo2.module.css"
import logoimg from "../../../assets/prueba.png"

export const Logo2 = () => {
    return (
        <div>
            <img src={logoimg} alt="logo" className={style.img} />
        </div>
    )
}






