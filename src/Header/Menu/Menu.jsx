import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={s.menu__items}>
      <NavLink className={s.menu__item} activeClassName={s.activeLink} to="/profile/2">
        Profile
      </NavLink>
      <NavLink className={s.menu__item} activeClassName={s.activeLink} to="/friends">
        Friends
      </NavLink>
      <NavLink className={s.menu__item} activeClassName={s.activeLink} to="/message">
      Message
      </NavLink>
      <NavLink className={s.menu__item} activeClassName={s.activeLink} to="/info">
      Info
      </NavLink>
      <NavLink className={s.menu__item} activeClassName={s.activeLink} to="/settings">
      Settings
      </NavLink>
    </div>
  );
};

export default Menu;
