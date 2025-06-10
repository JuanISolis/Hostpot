import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MiniLogo } from "./logo/MiniLogo";
import { Navbar } from "./Navbar/Navbar";
import { HamburgerLogo } from "./hamburgerLogo/HamburgerLogo";
import style from "./Header.module.css";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);


    return (
        <div className={style.header}>
            <NavLink to="/">
                <MiniLogo />
            </NavLink>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <HamburgerLogo isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
    );
};
