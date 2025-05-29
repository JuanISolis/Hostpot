


import { HamburgerLogo } from "./hamburgerLogo/HamburgerLogo"
import { MiniLogo } from "./logo/MiniLogo"
import { Navbar } from "./Navbar/Navbar"
import style from "./Header.module.css"

export const Header = () => {
    return (
        <div className={style.header}>
            <MiniLogo />
            <Navbar />
            <HamburgerLogo />
        </div>
    )
}
