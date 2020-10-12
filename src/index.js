import React from "react";
import ReactDOM from "react-dom";
import App, { VisibilityFilters } from "./components/App";
import { createStore } from "redux";// 从 redux 中导出了 createStore
import { Provider } from "react-redux";// 从 react-redux 导出了 Provider，搭建起 Redux 和 React 交流的桥梁

const initialState = {// 创建初始状态数据
    todos: [
      {
        id: 1,
        text: "你好, 图雀",
        completed: false
      },
      {
        id: 2,
        text: "我是一只小小小小图雀",
        completed: false
      },
      {
        id: 3,
        text: "小若燕雀，亦可一展宏图！",
        completed: false
      }
    ],
    filter: VisibilityFilters.SHOW_ALL
  };
    
  const rootReducer = (state, action) => {
    switch (action.type) {

      case "ADD_TODO": {// 新增事项
        const { todos } = state;
    
        return {
          ...state,
          todos: [// 纯化
            ...todos,
            {
              id: action.id,
              text: action.text,
              completed: false
            }
           ]
        };
      }

      case "TOGGLE_TODO": {// 改变事项状态
        const { todos } = state;
    
        return {
          ...state,
          todos: todos.map(todo =>
            todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
          )
        };
      }

      default:
        return state;
    }
  };
    
  const store = createStore(rootReducer, initialState);// 生成store
    
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
