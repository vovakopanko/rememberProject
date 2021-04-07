import React from 'react';
import s from './Content.module.css';
import Desk from './Dask/Dask';

const Content = () => {
    return (
        <div className={s.app__header}>
            <div>WELCOME DEAR</div>
            <textarea value="Write your message"></textarea>
            <button>Click Me</button>
            <Desk name="Vova" age="27" comment="Привет я Вова" />
            <Desk name="Tanya" age="25" comment="Привет я Таня" />
            <Desk name="Egor" age="23" comment="Привет я Егор" />
        </div>
    )
}

export default Content;