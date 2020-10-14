import React from "react";
import { setVisibilityFilter,VisibilityFilters} from "../actions";
import FilterLink from "../containers/FilterLink";

/*
Link组件：传递参数active（布尔值）、元素内children、监听点击事件）
*/

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default Footer;