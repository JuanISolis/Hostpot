import { NavLink } from 'react-router-dom';
import style from "./navbar.module.css";
export const Navbar = () => {
  return (
    <ul className={style.nav}>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
          Home
        </NavLink>
      </li>
      <li>

        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/recorrido_del_gas">
          Recorrido del gas
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/bus_urbano">
          Bus urbano
        </NavLink>

      </li>
      <li>

        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/hoteleria_y_turismo">
          Hotelería y Turismo
        </NavLink>
      </li>

      <li>

        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/cita_medica">
          Cita médica
        </NavLink>
      </li>
    </ul >
  );
};

