
import { useState, useEffect } from "react"
import { AiFillBackward } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import style from "./login.module.css"
import AnimatedHero from "../heroAnimate/AnimatedHero";


export const LoginScreen = () => {
    const [stateformPin, setStateformPin] = useState(true)
    const navigate = useNavigate()
    const handleBtnBack = () => {
        navigate('/')
    }
    const TypingEffect = ({ text, speed = 150 }) => {
        const [displayedText, setDisplayedText] = useState("");

        useEffect(() => {
            let index = 0;
            const interval = setInterval(() => {
                setDisplayedText((prev) => {
                    const nextChar = text.charAt(index);
                    index++;
                    return prev + nextChar;
                });

                if (index >= text.length) {
                    clearInterval(interval);
                }
            }, speed);

            return () => clearInterval(interval);
        }, [text, speed]);

        return <p>{displayedText}</p>;
    };

    return (

        <>
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
                    <TypingEffect text="Conectividad sin limites" />
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
                    <form >
                        {stateformPin ?
                            (
                                <div className={style.userBox}>
                                    <input type="text" id="user" name="user" placeholder="ingrese su nombre del usuario" />
                                    <input type="text" id="password" name="password" placeholder="ingrese su password" />
                                </div>

                            )
                            : (

                                <div className={style.pinBox}>
                                    <input type="text" id="pin" name="pin" placeholder=" ingrese porfavor su pin" />
                                </div>
                            )}

                        <div className={style.chooseUserPin}>
                            <button className={style.chooseUserPinBtn}>Conectarse</button>
                            <button className={style.chooseUserPinBtn}>Prueba Gratis</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
