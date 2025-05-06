import React from 'react'
import './ruta.css'
import { Header } from '../global/layouts/header/Header'
import { Main } from '../global/layouts/main/Main'
import { Footer } from '../global/layouts/footer/Footer'

export const Ruta = () => {
  return (
    <div className='rute-conteiner'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
