// import { NavLink } from 'react-router-dom';
// import { RiHome2Line } from "react-icons/ri";
// import { FaMap } from "react-icons/fa";
// import { AiFillLayout } from "react-icons/ai";
// import { FaBriefcaseMedical } from "react-icons/fa6";
// import style from "./navbar.module.css";
// export const Navbar = () => {
//   return (
//     <ul className={style.nav}>
//       <li>
//         <NavLink
//           className={({ isActive }) =>
//             `flex ${isActive ? "active" : ""}`
//           }
//           to="/"
//         >
//           <RiHome2Line />
//           Home
//         </NavLink>
//       </li>
//       <li>

//         <NavLink className={({ isActive }) =>
//           `flex ${isActive ? "active" : ""}`
//         } to="/recorrido_del_gas">
//           <FaMap />
//           Recorrido del gas
//         </NavLink>
//       </li>
//       <li>
//         <NavLink className={({ isActive }) =>
//           `flex ${isActive ? "active" : ""}`
//         } to="/bus_urbano">
//           <FaMap />
//           Bus urbano
//         </NavLink>

//       </li>
//       <li>

//         <NavLink className={({ isActive }) =>
//           `flex ${isActive ? "active" : ""}`
//         } to="/hoteleria_y_turismo">
//           <AiFillLayout />
//           Hotelería y Turismo
//         </NavLink>
//       </li>

//       {/* <li>

//         <NavLink className={({ isActive }) =>
//           `flex ${isActive ? "active" : ""}`
//         } to="/cita_medica">
//           <FaBriefcaseMedical />
//           Cita médica
//         </NavLink>
//       </li> */}
//     </ul >
//   );
// };



import { NavLink } from 'react-router-dom';
import { RiHome2Line } from "react-icons/ri";
import { FaMap } from "react-icons/fa";
import { AiFillLayout } from "react-icons/ai";
import style from "./navbar.module.css";

export const Navbar = ({ isOpen, setIsOpen }) => {

  console.log(isOpen)

  return (
    <ul className={`${style.nav} ${isOpen ? style.active : ""}`}>
      <li>
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `${style.link} ${isActive ? style.active : ""}`
          }
        >
          <RiHome2Line />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/recorrido_del_gas"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `${style.link} ${isActive ? style.active : ""}`
          }
        >
          <FaMap />
          Recorrido del gas
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bus_urbano"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `${style.link} ${isActive ? style.active : ""}`
          }
        >
          <FaMap />
          Bus urbano
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/hoteleria_y_turismo"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `${style.link} ${isActive ? style.active : ""}`
          }
        >
          <AiFillLayout />
          Hotelería y Turismo
        </NavLink>
      </li>
    </ul>
  );
};
