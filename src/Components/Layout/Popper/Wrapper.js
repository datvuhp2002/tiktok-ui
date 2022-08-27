import React from "react";
import classNames from "classnames/bind";
import Styles from "./Popper.module.scss";
const cx = classNames.bind(Styles);

export default function Wrapper({ children, className }) {
  return <div className={cx("wrapper", className)}>{children}</div>;
}
