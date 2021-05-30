import React, { useState } from "react";
import s from "./Friends.module.css";

type PropsType = {
  totalUsersCount: number,
  pageSize: number,
  currentPage: number,
  getCurrentPage: (pages:number)=>void,
  portionSize: number
}

const Pagination:React.FC<PropsType> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  getCurrentPage,
  portionSize,
}) => {
  let pageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pageCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPorionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;

  return (
    <div>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(1)
            getCurrentPage(1)
          }}
        >
          FIRST PAGE
        </button>
      )}
      {portionNumber > 2 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}

      <span className={s.friends__pagination}>
        {pages
          .filter((p) => p >= leftPorionNumber && p <= rightPortionNumber)
          .map((p) => {
            return (
              <span
                key={p}
                onClick={() => getCurrentPage(p)}
                className={currentPage === p ? s.friends__activPage : " "}
              >
                {p}
              </span>
            );
          })}
      </span>
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
      {
        <button
          onClick={() => {
            setPortionNumber(portionCount);
          }}
        >
          LAST PAGE
        </button>
      }
      <div>
        {portionNumber} at {portionCount}
      </div>
    </div>
  );
};

export default Pagination;
