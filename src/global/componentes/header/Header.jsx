import React from 'react'
import style from "./Header.module.css"
import { Logo } from '../logo/logo'
import { Navbar } from '../../layouts/header/navbar/Navbar'
import { HamburgerLogo } from '../hamburgerLogo/HamburgerLogo'
export const Header = () => {
    return (
        <div className={style.header}>
            <Logo />
            <Navbar />
            <HamburgerLogo />
        </div>
    )
}
