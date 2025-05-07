import { Route, Routes } from "react-router-dom";
import {Home} from '../../../interfaces/home/Home'
import {Gas} from '../../../interfaces/recorrido_gas/Gas'
import {Bus} from '../../../interfaces/bus/Bus'
import {HotelTurismo} from '../../../interfaces/hotel_turismo/HotelTurismo'
import {AgendaMedica} from '../../../interfaces/agendamiento_medico/AgendaMedica'
import './main.css'

export const Main = () => {
  return (
    <div className="conteiner-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recorrido_del_gas" element={<Gas />} />
        <Route path="/bus_urbano" element={<Bus />} />
        <Route path="/hoteleria_y_turismo" element={<HotelTurismo />} />
        <Route path="/cita_medica" element={<AgendaMedica />} />
      </Routes>
    </div>
  )
}
