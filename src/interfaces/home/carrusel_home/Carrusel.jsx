import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carrusel.css'

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Carrusel = () => {
  return (
    <div className='conteiner-carrusel'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={65}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className='carrusel'
      >
        <SwiperSlide>
            <div className='conteiner-targt'>
                <h4 className='tit-carru'>Multiples dispositivos</h4>
                <p>Puedes acceder desde cualquier dispositivo como tablets, smartphones, computadoras.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='conteiner-targt'> 
                <h4 className='tit-carru'>Precios al alcance de tu bolsillo</h4>
                <p> El tiempo y el costo lo decides tu, con precios asequibles formamos un plan a tu medida.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='conteiner-targt'>
                <h4 className='tit-carru'>Internet por Fibra Óptica</h4>
                <p>Somos la mejor opcion de la region, conectate con nosotros y navega a mayor velocidad .</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='conteiner-targt'>
                <h4 className='tit-carru'>+ de 150 Puntos de Acceso</h4>
                <p>Estamos contigo mas cerca de lo que piensas, unete a nuestra</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carrusel;
