import React from 'react'
import gasimg from "../../assetsCris/gas.webp"
import style from "./gasCard.module.css"


export const CardGas = ({ dataCards, title }) => {
    return (
        <div className={style.gasCard}>
            <div className={style.gasCard__title}>
                <h1>Recorrido del Gas</h1>
                <h3>{title}</h3>
            </div>
            <img src={gasimg} className={style.imgCard} alt="" />
            <ul className={style.containerListUl}>
                {
                    dataCards.map((lugar, index) => (
                        <li key={index} className={style.gasCard__list}>
                            <span className={style.gasCard__list__name}>{lugar.nombre}</span>
                            <span className={style.gasCard__list__zona}>{lugar.zona}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
