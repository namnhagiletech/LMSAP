import React from "react";
import "./index.scss";
import { MENU } from "../../constants/COMMON_CONSTANTS";
import { Link } from "react-router-dom";

interface Menu {
  name: string;
  img: JSX.Element;
  path: string;
}

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        {MENU.map((el: Menu) => (
          <li key={el.name}>
            <Link to={el.path}>
              <div className="flex justify-center items-center mb-1">
                {el.img}
              </div>
              <span>{el.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
