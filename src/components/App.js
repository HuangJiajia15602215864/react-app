import React from "react";
import AddTodoContainer from "../containers/AddTodoContainer";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";

/*
全局变量（事项ID、过滤）；函数（事项过滤返回）
App类组件：state（事项数组、过滤）；函数（添加事项、改变事项状态、切换过滤）；渲染（通过this.state获取数据并存在渲染函数内的变量）

AddTodo组件：监听onSubmit事件，参数来自AddTodo的input.value
TodoList组件：传递当前过滤下该展示的列表、监听toggleTodo事件，参数来自点击的列表ID
Footer：传递当前过滤项、监听切换过滤setVisibilityFilter事件，参数来自点击附带的参数
*/

class App extends React.Component {
  render() {
    return (
      <div>
        <AddTodoContainer />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;

