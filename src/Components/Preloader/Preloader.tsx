import React from "react";
import preloader from "./../../pictures/preloader.gif";
import s from "./Preloader.module.css";

let Preloader = () => {
  return (
    <div className={s.preloader}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
