


import { HamburgerLogo } from "./hamburgerLogo/HamburgerLogo"
import { MiniLogo } from "./logo/MiniLogo"
import { Navbar } from "./Navbar/Navbar"
import style from "./Header.module.css"
import { NavLink } from "react-router-dom"
import { useState } from "react"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
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
