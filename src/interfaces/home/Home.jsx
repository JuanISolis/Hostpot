import React from 'react'
import cofiber from '../../assets/cofiber.png'

export const Home = () => {
  return (
    <div>
      <img src={cofiber} alt="Logo" style={{ width: '25%', height: 'auto', borderRadius: '100%'}} />
      <h1>Internet por Fibra Óptica</h1>

      <h4>Somos un equipo dedicado a las telecomunicaciones, brindado conexiones de forma domiciliaria por fibra óptica y por red Wireless en lugares estratégicos.</h4>

      <div >
        <div >
          <h4 >Multiples dispositivos</h4>
          <p>Puedes acceder desde cualquier dispositivo como tablets, smartphones, computadoras.</p>
        </div>
        <div >
            <h4 >Precios al alcance de tu bolsillo</h4>
            <p> El tiempo y el costo lo decides tu, con precios asequibles formamos un plan a tu medida.</p>
        </div>
        <div >
            <h4 >Internet por Fibra Óptica</h4>
            <p>Somos la mejor opcion de la region, conectate con nosotros y navega a mayor velocidad .</p>
        </div>
        <div >
            <h4 >+ de 150 Puntos de Acceso</h4>
            <p>Estamos contigo mas cerca de lo que piensas, unete a nuestra</p>
        </div>
      </div>
    </div>
  )
}
