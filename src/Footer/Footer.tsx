import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.menu__items}>
            <a href="https://vk.com/" className={s.menu__item}>VK</a>
            <a href="https://ru-ru.facebook.com/" className={s.menu__item}>Facebook</a>
            <a href="https://twitter.com/?lang=ru" className={s.menu__item}>Twitter</a>
            <a href="https://www.youtube.com/"className={s.menu__item}>Youtube</a>
            <p>+ 375 (33) 333 - 33 -33</p>
        </div>
    )
}

export default Footer;