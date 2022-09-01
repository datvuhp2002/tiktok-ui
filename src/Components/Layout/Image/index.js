import { useState, forwardRef } from "react";
import images from "../../../assets/images";
import styles from "./Image.module.scss";
import classNames from "classnames";

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallback: customFallback = images.default,
      ...props
    },
    ref
  ) => {
    const [fallback, setFallback] = useState("");

    function handleError() {
      setFallback(customFallback);
    }
    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

export default Image;
