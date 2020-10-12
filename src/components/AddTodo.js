import React from "react";
import { connect } from "react-redux";// connect:将 Store 中的状态注入组件的同时，还给组件传递了一个额外的方法：dispatch
import { addTodo } from "../actions";

const AddTodo = ({ dispatch  }) => {
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
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);