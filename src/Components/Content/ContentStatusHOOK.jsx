import React, { useEffect, useState } from "react";

const ContentStausHOOK = ({getStatus,updateStatusThunk}) => {
  const [editMode, setEditMode] = useState(true)
  const [status, setStatus] = useState(getStatus)

  useEffect( () => {setStatus(getStatus);
  }, [getStatus])

  const activatedEditMode = () => {
    setEditMode(false)
  };

  const deActivatedEditMode = () => {
    setEditMode(true)
    updateStatusThunk(status)
  };

  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value)
  }
    return (
      <>
        {editMode ? (
          <div>
            <span onDoubleClick={activatedEditMode}>
              {getStatus || "-----"}
            </span>
          </div>
        ) : (
          <div>
            <input
              onBlur={deActivatedEditMode}
              onChange={onChangeStatus}
              autoFocus={true}
              value={status}
            />
          </div>
        )}
      </>
    );
  }

export default ContentStausHOOK;
