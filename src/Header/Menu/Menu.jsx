import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={s.menu__items}>
      <NavLink className={s.menu__item} activeClassName={s.activeLink} to="/content">
        Content
      </NavLink>
      <NavLink className={s.menu__item} activeClassName={s.activeLink} to="/friends">
        Friends
      </NavLink>
      <NavLink className={s.menu__item} activeClassName={s.activeLink} to="/message">
      Message
      </NavLink>
      <a href="#" className={s.menu__item}>
        Info
      </a>
      <a href="#" className={s.menu__item}>
        Settings
      </a>
    </div>
  );
};

export default Menu;
