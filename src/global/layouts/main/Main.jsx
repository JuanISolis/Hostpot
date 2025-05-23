import { Route, Routes } from "react-router-dom";
import { Home } from '../../../interfaces/home/Home'
import { GasScreen } from '../../../interfaces/recorrido_gas/GasScreen'
import { HotelTurismo } from '../../../interfaces/hotel_turismo/HotelTurismo'
import { AgendaMedica } from '../../../interfaces/agendamiento_medico/AgendaMedica'
import { BusUrbanoScreen } from "../../../interfaces/busUrbano/BusUrbanoScreen";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recorrido_del_gas" element={<GasScreen />} />
        <Route path="/bus_urbano" element={<BusUrbanoScreen />} />
        <Route path="/hoteleria_y_turismo" element={<HotelTurismo />} />
        <Route path="/cita_medica" element={<AgendaMedica />} />
      </Routes>
    </>
  )
}
