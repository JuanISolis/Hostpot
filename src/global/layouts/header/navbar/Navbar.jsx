import { NavLink } from 'react-router-dom';
import '../css/navbar.css'

export const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
          <p className='p-nav'>HOME</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/recorrido_del_gas">
          <p className='p-nav'>Recorrido del gas</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/bus_urbano">
          <p className='p-nav'>Bus urbano</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/hoteleria_y_turismo">
          <p className='p-nav'>Hotelería y Turismo</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/cita_medica">
          <p className='p-nav'>Cita médica</p>
        </NavLink>
      </div>
    </nav>
  );
};

