# 待办事项

## 项目目录
- actions 
  - index.js Action Creators，通过函数包装动作发起的参数，提供给dispatch使用

- components  展示组件（用于渲染界面）
  - AddTodo.js 添加事项，包含输入框、按钮
  - App.js     主组件，将3个容器子组件引入
  - Footer.js  事项过滤按钮
  - Link.js    按钮
  - Todo.js    单个事项
  - TodoList.js 事项列表

- containers  容器组件（用于接管状态）
  - AddTodoContainer.js 添加事项
  - FilterLink.js       按钮
  - VisibleTodoList.js  事项列表

- reducers 改变store的唯一途径
  - filter.js 切换过滤展示的类型
  - index.js  使用combineReducers组合拆分状态的 Reducers
  - todos.js  添加和切换待办事项是否完成状态

- index.js 项目入口，将APP引入并渲染，在 App 组件的最外层使用 Provider 包裹并接收store，使子组件中访问到 store 中的状态。