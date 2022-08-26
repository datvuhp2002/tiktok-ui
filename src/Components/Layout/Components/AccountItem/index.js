import React from "react";
import classNames from "classnames/bind";
import Styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(Styles);

export default function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7cf5cce03b212d6183967a227330fd1e~c5_100x100.jpeg?x-expires=1661439600&x-signature=aSvVlxSCXIIb7blVUQGsqiPrT0o%3D"
        alt="abc"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>bacxiungotlamday</span>
          <FontAwesomeIcon className={cx("checkIcon")} icon={faCheckCircle} />
        </h4>
        <p className={cx("userName")}>@30thang10</p>
      </div>
    </div>
  );
}
