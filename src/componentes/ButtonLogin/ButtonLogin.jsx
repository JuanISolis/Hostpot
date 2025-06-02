import { useNavigate } from "react-router-dom";
import style from "./buttonLogin.module.css"



export const ButtonLogin = ({ title }) => {

    const navigate = useNavigate();
    const handleClickLogin = () => {
        navigate("/login");
    };

    return (
        <div className={style.containHero}>
            <h1>COFIBER</h1>
            <h3>Conectividad sin limites</h3>
            <button className={style.btnLogin} onClick={handleClickLogin}>{title}</button>
        </div>
    )
} 
