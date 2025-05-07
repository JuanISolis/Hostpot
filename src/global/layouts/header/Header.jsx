import React from 'react'
import './css/header.css'
import prueba from '../../../assets/prueba.png'
import { Navbar } from './navbar/Navbar'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header >
        <div className='conteinart-all'> 
            <Link to="/">
              <img src={prueba} alt="Logo" className="logo-imagen" />
            </Link>
            <div className='nav-conteiner'>
                <Navbar />
            </div>
        </div>
    </header>
  )
}
