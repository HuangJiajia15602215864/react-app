import React from "react";

const AddTodo = ({ addTodo }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          //onSubmit(input.value);
          // 使用 addTodo 接收 input.value 输入值，创建一个类型为 "ADD_TODO" 的 Action，并使用 dispatch 函数将这个 Action 发送给 Redux，请求更新 Store 的内容
          addTodo(input.value);
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;