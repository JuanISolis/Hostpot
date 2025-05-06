import React from 'react'
import './css/header.css'
import prueba from '../../../assets/prueba.png'
import { Navbar } from './navbar/Navbar'

export const Header = () => {
  return (
    <header >
        <div className='conteinart-all'> 
            <img src={prueba} alt="Logo" className="logo-imagen" />
            <div className='nav-conteiner'>
                <Navbar />
            </div>
        </div>
    </header>
  )
}
