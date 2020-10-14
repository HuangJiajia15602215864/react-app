// Action Creators
let nextTodoId = 0;

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL", // 全部
    SHOW_COMPLETED: "SHOW_COMPLETED", // 已完成
    SHOW_ACTIVE: "SHOW_ACTIVE" // 未完成
};

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