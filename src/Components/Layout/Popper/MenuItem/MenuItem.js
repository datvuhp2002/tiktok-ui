import React from "react";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import Button from "../../Components/Button";

const cx = classNames.bind(styles);
export default function MenuItem({ data, onClick }) {
  const classes = cx("menu-item", {
    separate: data.separate,
  });
  return (
    <Button
      className={classes}
      to={data.to}
      leftIcon={data.icon}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}
