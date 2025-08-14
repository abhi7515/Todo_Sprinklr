import React, { useState } from "react";

const TodoItem = ({ title, timeStamp, id, setList }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [data, setData] = useState(title);

  const handleTodoUpdate = (e) => {
    e.preventDefault();
    const val = e.target.value;
    setData(val);
  };

  const submitEdit = () => {
    setList((list) => {
      const result = [...list];
      result[id].text = data;
      return result;
    });
    setIsEditMode((isEditMode) => !isEditMode);
  };

  return (
    <div className="todo-item">
      {isEditMode ? (
        <div className="todo-edit">
          <input
            type="text"
            value={data}
            onChange={(e) => handleTodoUpdate(e)}
          />
          <button onClick={submitEdit}>Submit</button>
        </div>
      ) : (
        <>
          <div
            onClick={() => setIsEditMode((isEditMode) => !isEditMode)}
            className="todo-title"
          >{`todo:${title}`}</div>
          <div className="todo-time">{`created at:${timeStamp}`}</div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
