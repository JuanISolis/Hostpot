
import { HostpotApp } from './routes/HostpotApp'
import { LoginScreen } from './componentes/Login/LoginScreen'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
function App() {

  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/*" element={<HostpotApp />} />
    </Routes>
  )
}

export default App
