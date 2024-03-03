import React from "react";

const TodoItem2 = () => {
  let todoName = "Go to College";
  let todoDate = "04/10/2023";
  return (
    <div class="container">
      <div class="row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger button-item">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem2;
