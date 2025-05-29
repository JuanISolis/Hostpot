import { useNavigate } from "react-router-dom";
import style from "./buttonLogin.module.css"

export const ButtonLogin = ({ title }) => {

    const navigate = useNavigate();
    const handleClickLogin = () => {
        navigate("/login");
    };

    return (
        <button className={style.btnLogin} onClick={handleClickLogin}>{title}</button>
    )
}
