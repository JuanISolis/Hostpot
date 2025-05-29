
import style from "./busCard.module.css"

export const BusCard = ({ dataCards, title }) => {
    return (
        <div className={style.gasCard}>
            <div className={style.gasCard__title}>
                <h1>Bus Urbano</h1>
                <h3>{title}</h3>
            </div>
            <img src={busUrbano} className={style.imgCard} alt="busurbano" />
            <ul className={style.containerListUl}>
                {
                    dataCards.map((lugar, index) => (
                        <li key={index} className={style.gasCard__list}>
                            <span className={style.gasCard__list__name}>{lugar.barrio}</span>
                            <span className={style.gasCard__list__zona}>{lugar.calle}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
