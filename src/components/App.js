import React from "react";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

/*
全局变量（事项ID、过滤）；函数（事项过滤返回）
App类组件：state（事项数组、过滤）；函数（添加事项、改变事项状态、切换过滤）；渲染（通过this.state获取数据并存在渲染函数内的变量）

AddTodo组件：监听onSubmit事件，参数来自AddTodo的input.value
TodoList组件：传递当前过滤下该展示的列表、监听toggleTodo事件，参数来自点击的列表ID
Footer：传递当前过滤项、监听切换过滤setVisibilityFilter事件，参数来自点击附带的参数
*/

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",// 全部
  SHOW_COMPLETED: "SHOW_COMPLETED",// 已完成
  SHOW_ACTIVE: "SHOW_ACTIVE"// 未完成
};
// 事项过滤 
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

class App extends React.Component {
  render() {
    const { todos, filter } = this.props;
    return (
      <div>
        <AddTodo />
        <TodoList todos={getVisibleTodos(todos, filter)}/>
        <Footer filter={filter} />
      </div>
    );
  }
}

// mapStateToProps同时操作组件的原 props 和 Store 的状态，然后合并成最终的组件 props
const mapStateToProps = (state, props) => ({
  todos: state.todos,
  filter: state.filter
});
  
// 获取 mapStateProps 返回的最终组合后的状态，然后将其注入到 App 组件中，返回一个新的组件
export default connect(mapStateToProps)(App);

