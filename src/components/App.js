import React from "react";
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

let nextTodoId = 0;
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
  constructor(props) {
    super(props);
    this.state = {
      todos: [],// 全部事项
      filter: VisibilityFilters.SHOW_ALL// 过滤关键字
    };

    this.toggleTodo = this.toggleTodo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this);
  }

  // 点击事项，改变是否完成状态
  toggleTodo(id) {
    const { todos } = this.state;

    this.setState({
      todos: todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    });
  }

  // 添加事项
  onSubmit(value) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: nextTodoId++,
          text: value,
          completed: false
        }
      ]
    });
  }

  // 切换过滤类型
  setVisibilityFilter(filter) {
    this.setState({
      filter: filter
    });
  }

  render() {
    const { todos, filter } = this.state;
    return (
      <div>
        <AddTodo onSubmit={this.onSubmit} />
        <TodoList
          todos={getVisibleTodos(todos, filter)}
          toggleTodo={this.toggleTodo}
        />
        <Footer
          filter={filter}
          setVisibilityFilter={this.setVisibilityFilter}
        />
      </div>
    );
  }
}

export default App;