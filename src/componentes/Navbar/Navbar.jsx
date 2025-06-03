import { NavLink } from 'react-router-dom';
import { RiHome2Line } from "react-icons/ri";
import { FaMap } from "react-icons/fa";
import { AiFillLayout } from "react-icons/ai";
import { FaBriefcaseMedical } from "react-icons/fa6";
import style from "./navbar.module.css";
export const Navbar = () => {
  return (
    <ul className={style.nav}>
      <li>
        <NavLink
          className={({ isActive }) =>
            `flex ${isActive ? "active" : ""}`
          }
          to="/"
        >
          <RiHome2Line />
          Home
        </NavLink>
      </li>
      <li>

        <NavLink className={({ isActive }) =>
          `flex ${isActive ? "active" : ""}`
        } to="/recorrido_del_gas">
          <FaMap />
          Recorrido del gas
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) =>
          `flex ${isActive ? "active" : ""}`
        } to="/bus_urbano">
          <FaMap />
          Bus urbano
        </NavLink>

      </li>
      <li>

        <NavLink className={({ isActive }) =>
          `flex ${isActive ? "active" : ""}`
        } to="/hoteleria_y_turismo">
          <AiFillLayout />
          Hotelería y Turismo
        </NavLink>
      </li>

      {/* <li>

        <NavLink className={({ isActive }) =>
          `flex ${isActive ? "active" : ""}`
        } to="/cita_medica">
          <FaBriefcaseMedical />
          Cita médica
        </NavLink>
      </li> */}
    </ul >
  );
};

