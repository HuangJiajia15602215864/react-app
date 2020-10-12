import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";// 给 TodoList 传入 dispatch 函数
import { toggleTodo } from "../actions";
import Todo from "./Todo";

/*
Todo组件：监听点击事件、传递todo对象（包含completed、text属性）
*/

const TodoList = ({ todos, dispatch  }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo.id))} />
    ))}
  </ul>
);

// 检验
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default connect()(TodoList);