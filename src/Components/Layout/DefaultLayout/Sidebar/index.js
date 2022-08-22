import React from "react";
import Styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(Styles);
export default function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <h2>Sidebar</h2>
    </aside>
  );
}
