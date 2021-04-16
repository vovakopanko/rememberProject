import React from "react";

let Posts = ({ name, age, comment }) => {
  return (
    <div>
      <div>
        <b>Name: </b>
        {name} , <b>Age: </b> {age}
      </div>
      <div>
        <b>Comment: </b>
        {comment}
      </div>
    </div>
  );
};

export default Posts;
