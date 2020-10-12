import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "./Link";
import { VisibilityFilters } from "./App";

/*
Link组件：传递参数active（布尔值）、元素内children、监听点击事件）
*/

const Footer = ({ filter, dispatch  }) => (
  <div>
    <span>Show: </span>
    <Link
      active={VisibilityFilters.SHOW_ALL === filter}
      onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))}
    >
      All
    </Link>
    <Link
      active={VisibilityFilters.SHOW_ACTIVE === filter}
      onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))}
    >
      Active
    </Link>
    <Link
      active={VisibilityFilters.SHOW_COMPLETED === filter}
      onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))}
    >
      Completed
    </Link>
  </div>
);

export default connect()(Footer);