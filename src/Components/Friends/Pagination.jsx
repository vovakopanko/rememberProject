import React from "react";
import s from "./Friends.module.css";

const Pagination = ({
  totalUsersCount,
  pageSize,
  currentPage,
  getCurrentPage,
}) => {
  let pageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
          <div className={s.friends__pagination}>
            {pages.map((p) => {
              return (
                <span key={p}
                  onClick={() => getCurrentPage(p)}
                  className={currentPage === p ? s.friends__activPage : " "}
                >
                  {p}
                </span>
              );
            })}
          </div>
  );
};

export default Pagination;
