import React, { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../index";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import Header from "./Header";

const cx = classNames.bind(styles);
const defaultFn = () => {};
export default function Menu({ children, items, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItem = () => {
    return current.data.map((item, index) => {
      // Convert boolean
      // if item has children in object, isParent will return true;
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => {
                return [...prev, item.children];
              });
              // (item.children);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      offset={[12, 8]}
      delay={[0, 800]}
      interactive
      placement="bottom-end"
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                  // ("clicked");
                }}
              />
            )}
            {renderItem()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}
