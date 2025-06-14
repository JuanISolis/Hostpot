import { useState, useEffect } from "react";
import { AiFillBackward } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import style from "./login.module.css";
import AnimatedHero from "../heroAnimate/AnimatedHero";
import { ModalVideo } from "../modalVideo/ModalVideo";


export const LoginScreen = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [canClose, setCanClose] = useState(false);
    const [timePassed, setTimePassed] = useState(false);
    const [videoClosed, setVideoClosed] = useState(false);

    const handleTestGratis = (e) => {
        e.preventDefault();
        setShowVideo(true);
        setCanClose(false);
        setTimePassed(false);

        setTimeout(() => {
            setCanClose(true);
            setTimePassed(true);
        }, 10000);

    };

    const [stateformPin, setStateformPin] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (timePassed && videoClosed) {
            window.location.href = "https://www.facebook.com/Cofyber?mibextid=ZbWKwL";
        }
    }, [timePassed, videoClosed]);

    const handleBtnBack = () => {
        navigate('/');
    };



    const TypingEffect = ({ text, speed = 150 }) => {
        const [displayedText, setDisplayedText] = useState("");

        useEffect(() => {
            let index = 0;
            const interval = setInterval(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                index++;
                if (index >= text.length) clearInterval(interval);
            }, speed);

            return () => clearInterval(interval);
        }, [text, speed]);

        return <p>{displayedText}</p>;
    };

    return (
        <>
            {showVideo ? (
                <ModalVideo
                    onClose={() => {
                        setShowVideo(false);
                        setVideoClosed(true);
                    }}
                />
            ) : (
                <div className={style.loginScreen}>
                    <AnimatedHero />
                    <div className={style.containerBtnBackLogin}>
                        <button className={style.returnBtn} onClick={handleBtnBack}>
                            <AiFillBackward />
                            Regresar
                        </button>
                    </div>
                    <div className={style.login}>
                        <h3>COFIBER</h3>
                        <TypingEffect text="Coonectividad sin límites" />
                        <div className={style.chooseUserPin}>
                            <button
                                className={`${style.chooseUserPinBtn} ${!stateformPin ? style.active : ''}`}
                                onClick={() => setStateformPin(false)}
                            >
                                Pin
                            </button>

                            <button
                                className={`${style.chooseUserPinBtn} ${stateformPin ? style.active : ''}`}
                                onClick={() => setStateformPin(true)}
                            >
                                User
                            </button>
                        </div>
                        <form>
                            {stateformPin ? (
                                <div className={style.userBox}>
                                    <input type="text" id="user" name="user" placeholder="Ingrese su nombre de usuario" />
                                    <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" />
                                </div>
                            ) : (
                                <div className={style.pinBox}>
                                    <input type="text" id="pin" name="pin" placeholder="Ingrese su PIN" />
                                </div>
                            )}

                            <div className={style.chooseUserPin}>
                                <button className={style.chooseUserPinBtn}>Conectarse</button>
                                <button onClick={handleTestGratis} className={style.chooseUserPinBtn}>Prueba Gratis</button>
                            </div>
                        </form>

                    </div>

                </div>
            )}
        </>
    );
};
