import React from "react";
import Logo from "../../../assets/logo/logo.png";
import { BiSearch } from "react-icons/bi";
import { Link ,NavLink} from "react-router-dom";
import "./header.css"
const Header: React.FC = () => {
  return (
    <header>
      <div className="header__container">
        <div className="header">
          <div className="header__left">
            <Link to="/">
            <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="header__rigth">
            <ul className="header__rigth__items">
              <NavLink className="header__rigth__items__a" to="">
                <li className="header__rigth__item">Home</li>
              </NavLink>
              <NavLink  className="header__rigth__items__a"  to="/services">
                <li className="header__rigth__item">Services</li>
              </NavLink>
              <NavLink to="/contact"  className="header__rigth__items__a" >
                <li className="header__rigth__item">Contact</li>
              </NavLink>
              <NavLink to="/About"  className="header__rigth__items__a" >
                <li className="header__rigth__item">About</li>
              </NavLink>
            </ul>
            <div className="header__search">
              <button>
                <BiSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
