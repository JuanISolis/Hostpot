
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import style from "./hamburger.module.css";

export const HamburgerLogo = ({ isOpen, toggleMenu }) => {
    return (
        <div className={style.HamburgerLogo} onClick={toggleMenu}>
            {isOpen ? <IoClose size={50} /> : <RxHamburgerMenu size={50} />}
        </div>
    );
};
