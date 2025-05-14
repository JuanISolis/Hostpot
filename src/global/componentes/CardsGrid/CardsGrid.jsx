import React from 'react'
import style from './CardsGrid.module.css'
import img1 from '../../../assetsCris/imgSectionCardHome1.webp'
import img2 from '../../../assetsCris/imgSectionCardHome2.webp'
import img3 from '../../../assetsCris/imgSectionCardHome3.webp'
import img4 from '../../../assetsCris/imgSectionCardHome4.webp'
export const CardsGrid = () => {
    return (
        <div className={style.CardsGrid}>
            <div className={style.card} >
                <img src={img3} alt="Multiples dispositivos" />
                <h4 >Multiples dispositivos</h4>
                <p>Puedes acceder desde cualquier dispositivo como tablets, smartphones, computadoras.</p>
            </div>
            <div className={style.card} >
                <img src={img4} alt="Precios al alcance" />
                <h4 >Precios al alcance de tu bolsillo</h4>
                <p> El tiempo y el costo lo decides tu, con precios asequibles formamos un plan a tu medida.</p>
            </div>
            <div className={style.card} >
                <img src={img2} alt="Fibra Óptica" />
                <h4 >Internet por Fibra Óptica</h4>
                <p>Somos la mejor opcion de la region, conectate con nosotros y navega a mayor velocidad .</p>
            </div>
            <div className={style.card}>
                <img src={img1} alt="150 Puntos de Acceso" />
                <h4 >+ de 150 Puntos de Acceso</h4>
                <p>Estamos contigo mas cerca de lo que piensas, unete a nuestra</p>
            </div>
        </div>
    )
}
