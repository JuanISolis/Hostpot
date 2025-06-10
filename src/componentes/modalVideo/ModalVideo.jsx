import { useEffect, useState } from "react";
import style from "./modaVideo.module.css";
import video from "../../assetsCris/noUsados/DDD.mp4"

export const ModalVideo = ({ onClose }) => {
    const [countdown, setCountdown] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (countdown <= 0) {
            onClose();
        }
    }, [countdown, onClose]);

    return (
        <div className={style.modalOverlay}>
            <div className={style.modalContent}>
                <h3>Debes ver el video durante 1 minuto para continuar</h3>
                <video width="50%" autoPlay>
                    <source src={video} type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
                <p className={style.countdownText}>Cerrando en {countdown} segundos...</p>
            </div>
        </div>
    );
};
