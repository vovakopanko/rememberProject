import React from "react";

type PostType = {
  name:string,
  age:number, 
  comment:string
}

const Posts:React.FC<PostType>  = ({ name, age, comment })=> {
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
