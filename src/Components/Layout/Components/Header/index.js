import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmarkCircle,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
export default function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
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
        <div className={cx("actions")}></div>
      </div>
    </header>
  );
}
