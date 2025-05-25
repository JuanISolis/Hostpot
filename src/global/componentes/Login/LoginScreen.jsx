
import { useState } from "react"
import style from "./login.module.css"

import { AiFillBackward } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export const LoginScreen = () => {
    const [stateformPin, setStateformPin] = useState(true)


    const navigate = useNavigate()

    const handleBtnBack = () => {
        navigate('/')
    }

    return (
        <div className={style.loginScreen}>

            <div className={style.containerBtnBackLogin}>
                <button className={style.returnBtn} onClick={handleBtnBack}>
                    <AiFillBackward />
                    Regresar
                </button>
            </div>
            <div className={style.login}>
                <h3>COFIBER</h3>
                <p>Conectividad sin limites</p>
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
    )
}
