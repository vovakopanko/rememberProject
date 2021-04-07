import React from 'react';
import s from './Dask.module.css'

const Desk = (props) => {
    return(
        <div>
            <div className={s.comment}>Name : {props.name} , age : { props.age}</div>
            <div>Comment : {props.comment}</div>
        </div>
    )
}

export default Desk;