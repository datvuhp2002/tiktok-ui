import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmarkCircle,
  faMagnifyingGlass,
  faSpinner,
  faEllipsisVertical,
  faEarthAsia,
  faKeyboard,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "../../Popper";
import Tippy from "@tippyjs/react/headless";
import AccountItem from "../AccountItem";
import Menu from "../../Popper/MenuItem";

const cx = classNames.bind(styles);

const Menu_Items = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        { key: "language", code: "en", title: "English" },
        {
          key: "language",
          code: "vi",
          title: "Tieng Viet",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faQuestion} />,
    title: "Feedback and Help",
    to: "/feedback",
  },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: "Keybroad shortcuts" },
];

export default function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const handleMenuChange = (menuItem) => {
    switch (menuItem.key) {
      case "language":
        console.log("Day la ngon ngu", menuItem.title);
        break;
      default:
    }
  };
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <Tippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h3 className={cx("search-title")}>Accounts</h3>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input type="text" placeholder="search accounts and videos" />
            <button className={cx("clear")}>
              {/* clear */}
              <FontAwesomeIcon icon={faXmarkCircle} />
            </button>
            {/* loading */}
            <FontAwesomeIcon className={cx("spinner")} icon={faSpinner} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              {/* search */}
            </button>
          </div>
        </Tippy>

        <div className={cx("actions")}>
          <Button text>Register</Button>
          <Button primary>Login</Button>
          <Menu items={Menu_Items} onChange={handleMenuChange}>
            <button className={cx("menu-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}
