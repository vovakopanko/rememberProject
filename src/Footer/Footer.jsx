import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.menu__items}>
            <a href="#" className={s.menu__item}>VK</a>
            <a href="#" className={s.menu__item}>Facebook</a>
            <a href="#" className={s.menu__item}>Twitter</a>
            <a href="#"className={s.menu__item}>Youtube</a>
            <a href="#"className={s.menu__item}>+ 375 (33) 333 - 33 -33</a>
        </div>
    )
}

export default Footer;