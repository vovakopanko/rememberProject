import React from 'react';

let Posts = ({name,age,comment}) => {
    return(
        <div>
            <div>Name : {name} , age : {age}</div>
            <div>Comment : {comment}</div>
        </div>
    )
}

export default Posts;