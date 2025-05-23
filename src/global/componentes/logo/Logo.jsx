import React from 'react'
import style from "./logo.module.css"
import logoimg from "../../../assets/prueba.png"

export const Logo = () => {
    return (
        <div>
            <img src={logoimg} alt="logo" className={style.img} />


        </div>
    )
}






