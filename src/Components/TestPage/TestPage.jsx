import React, { useEffect, useState } from "react";
import style from "./TestPage.module.css";

const TestPage = () => {
  let [count, setCount] = useState("white");
  let [type, setType] = useState("users");
  let [data, setData] = useState([]);
  let [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      console.log(`cleaning type ${type}`);
    };
  }, [type]);

  const mouseMoveEvent = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveEvent);
  }, []);
  return (
    <div className={count === "black" ? style.colorBlack : style.colorWhite}>
      <div>
        <button onClick={() => setCount("black")}>B</button>
        <button onClick={() => setCount("white")}>W</button>
      </div>
      <div>
        <p>Вы выбрали {count} цвет темы</p>
      </div>
      <div>
        <h1>Ресурс: {type}</h1>
      </div>
      <button
        onClick={() => {
          setType("users");
        }}
      >
        Users
      </button>
      <button
        onClick={() => {
          setType("todos");
        }}
      >
        Todos
      </button>
      <button
        onClick={() => {
          setType("posts");
        }}
      >
        Posts
      </button>
      <pre>{JSON.stringify(data, null, 3)}</pre>
      <div>
        X : {position.x} Y: {position.y}
      </div>
    </div>
  );
};

export default TestPage;
