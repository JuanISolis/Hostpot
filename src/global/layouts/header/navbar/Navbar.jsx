import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
          HOME
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/recorrido_del_gas">
          Recorrido del gas
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/bus_urbano">
          Bus urbano
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/hoteleria_y_turismo">
          Hotelería y Turismo
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/cita_medica">
          Cita médica
        </NavLink>
      </div>
    </nav>
  );
};

