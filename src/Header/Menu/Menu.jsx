import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Menu.module.css";

let Menu = ({ login, LogoutThunk}) => {
  return (
    <div className={s.menu__items}>
      {" "}
      <NavLink
        className={s.menu__item}
        activeClassName={s.activeLink}
        to="/profile"
      >
        Profile
      </NavLink>
      <NavLink
        className={s.menu__item}
        activeClassName={s.activeLink}
        to="/friends"
      >
        Friends
      </NavLink>
      <NavLink
        className={s.menu__item}
        activeClassName={s.activeLink}
        to="/message"
      >
        Message
      </NavLink>
      <NavLink
        className={s.menu__item}
        activeClassName={s.activeLink}
        to="/info"
      >
        Info
      </NavLink>
      <NavLink
        className={s.menu__item}
        activeClassName={s.activeLink}
        to="/settings"
      >
        Settings
      </NavLink>
      <NavLink
        className={s.loginBlock}
        activeClassName={s.activeLink}
        to="/login"
      >
        {login ? (
          <div>
            {login} <button onClick={LogoutThunk}>Log Out</button>
          </div>
        ) : (
          <div>"YOU DONT OUTORAISED"</div>
        )}
      </NavLink>
    </div>
  );
};

export default Menu;
