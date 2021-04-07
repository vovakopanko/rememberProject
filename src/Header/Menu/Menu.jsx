import React from 'react';
import s from './Menu.module.css'

const Menu = () => {
    return (
        <div className={s.menu__items}>
            <a href="#" className={s.menu__item}>File</a>
            <a href="#" className={s.menu__item}>Edit</a>
            <a href="#" className={s.menu__item}>Selection</a>
            <a href="#"className={s.menu__item}>View</a>
            <a href="#"className={s.menu__item}>Go</a>
        </div>
    )
}

export default Menu;