


import { HamburgerLogo } from "./hamburgerLogo/HamburgerLogo"
import { MiniLogo } from "./logo/MiniLogo"
import { Navbar } from "./Navbar/Navbar"
import style from "./Header.module.css"
import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <div className={style.header}>
            <NavLink
                to="/"
            >
                <MiniLogo />
            </NavLink>
            <Navbar />
            <HamburgerLogo />
        </div>
    )
}
