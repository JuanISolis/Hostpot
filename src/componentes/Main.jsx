import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "../screens/HomeScreen";
import { GasScreen } from "../screens/GasScreen";
import { BusUrbanoScreen } from "../screens/BusUrbanoScreen";
import { HotelTourismScreen } from "../screens/HotelTourismScreen";
import { MedicalScheduleScreen } from "../screens/MedicalScheduleScreen";
export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/recorrido_del_gas" element={<GasScreen />} />
        <Route path="/bus_urbano" element={<BusUrbanoScreen />} />
        <Route path="/hoteleria_y_turismo" element={<HotelTourismScreen />} />
        <Route path="/cita_medica" element={<MedicalScheduleScreen />} />
      </Routes>
    </>
  )
}
