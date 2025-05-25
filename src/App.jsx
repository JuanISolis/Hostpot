
import { Ruta } from './rutas/Ruta'
import { LoginScreen } from './global/componentes/Login/LoginScreen'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/*" element={<Ruta />} />
    </Routes>
  )
}

export default App
