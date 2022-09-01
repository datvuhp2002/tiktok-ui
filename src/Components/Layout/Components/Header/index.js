import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Image from "../../Image";
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
  faCloudArrowUp,
  faMessage,
  faBell,
  faUser,
  faCoins,
  faGear,
  faArrowRightFromBracket,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "../../Popper";
import AccountItem from "../AccountItem";
import Menu from "../../Popper/MenuItem";
import HeadLess from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { MessagesIcon, NoticedIcon, UploadIcon } from "../Icons";

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
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    title: "Feedback and Help",
    to: "/feedback",
  },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: "Keybroad shortcuts" },
];
const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "View Profile",
    to: "/profile",
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: "Get Coins",
    to: "/getCoins",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Setting",
    to: "/Setting",
  },
  ...Menu_Items,
  {
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    title: "Log Out",
    to: "/Logout",
    separate: true,
  },
];

export default function Header() {
  const [searchResult, setSearchResult] = useState([]);
  let CurrentUser = true;

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
        <HeadLess
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
        </HeadLess>

        <div className={cx("actions")}>
          {CurrentUser ? (
            <>
              <Tippy delay={200} placement="bottom" content="Upload video">
                <button className={cx("actions-btn")}>
                  {/* <FontAwesomeIcon icon={faCloudArrowUp} /> */}
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={200} placement="bottom" content="Messages">
                <button className={cx("actions-btn")}>
                  {/* <FontAwesomeIcon icon={faCloudArrowUp} /> */}
                  <MessagesIcon />
                </button>
              </Tippy>
              <Tippy delay={200} placement="bottom" content="Inbox">
                <button className={cx("actions-btn")}>
                  {/* <FontAwesomeIcon icon={faCloudArrowUp} /> */}
                  <NoticedIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Register</Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu
            items={CurrentUser ? userMenu : Menu_Items}
            onChange={handleMenuChange}
          >
            {CurrentUser ? (
              <Image
                className={cx("User_Avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7cf5cce03b212d6183967a227330fd1e~c5_100x100.jpeg?x-expires=1661850000&x-signature=6lNlc5hE1LmSUa22jU%2FYsS2DIrg%3D"
                alt="User Name"
              />
            ) : (
              <button className={cx("menu-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}
