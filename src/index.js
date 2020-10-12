import React from "react";
import ReactDOM from "react-dom";
import App, { VisibilityFilters } from "./components/App";
import { createStore } from "redux";// 从 redux 中导出了 createStore
import { Provider } from "react-redux";// 从 react-redux 导出了 Provider，搭建起 Redux 和 React 交流的桥梁
import rootReducer from "./reducers";
   
const store = createStore(rootReducer);// 生成store
    
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
