import React from "react";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import Button from "../../Components/Button";

const cx = classNames.bind(styles);
export default function MenuItem({ data, onClick }) {
  return (
    <Button
      className={cx("menu-item")}
      to={data.to}
      leftIcon={data.icon}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}
