import React from 'react'
import style from "./MiniLogo.module.css"
import logoimg from "../../assetsCris/header/logoHeader.png"

export const MiniLogo = () => {
    return (
        <div>
            <img src={logoimg} alt="logo" className={style.img} />
        </div>
    )
}






