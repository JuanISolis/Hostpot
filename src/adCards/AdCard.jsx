import React, { useState, useEffect } from "react";
import adImage1 from "../assetsCris/images/1.png";
import adImage2 from "../assetsCris/images/2.png";
import adImage3 from "../assetsCris/images/3.png";
import style from "./adCards.module.css";

const adCards = [
    {
        title: "¡Oferta de Verano!",
        description: "Descuentos del 50% en todos los productos.",
        image: adImage1,
        link: "/oferta-verano",
    },
    {
        title: "Nuevo Lanzamiento",
        description: "Conoce nuestro nuevo producto revolucionario.",
        image: adImage2,
        link: "/nuevo-producto",
    },
    {
        title: "Promoción Especial",
        description: "Solo por hoy, envío gratis a todo el país.",
        image: adImage3,
        link: "/envio-gratis",
    },
];

const AdCard = () => {
    const [randomAd, setRandomAd] = useState(null);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * adCards.length);
        setRandomAd(adCards[randomIndex]);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    if (!randomAd || !visible) return null;

    return (
        <div className={`${style.adCardscontainer} ${style.slideIn}`}>
            <button
                className={style.closeButton}
                onClick={() => setVisible(false)}
                title="Cerrar anuncio"
            >
                ×
            </button>

            <a href={randomAd.link} target="_blank" rel="noopener noreferrer">
                <div>
                    <img
                        src={randomAd.image}
                        alt={randomAd.title}
                        className={style.adImage}
                    />
                </div>
            </a>
        </div>
    );
};

export default AdCard;