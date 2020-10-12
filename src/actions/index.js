// Action Creators
let nextTodoId = 0;

// 添加事项
export const addTodo = text => ({
    type: "ADD_TODO",
    id: nextTodoId++,
    text
});

// 改变状态
export const toggleTodo = id => ({
    type: "TOGGLE_TODO",
    id
});

// 切换过滤
export const setVisibilityFilter = filter => ({
    type: "SET_VISIBILITY_FILTER",
    filter
  });