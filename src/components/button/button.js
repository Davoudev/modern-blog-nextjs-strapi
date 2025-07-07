const { default: Link } = require("next/link");
import styles from "./button.module.sass";

export const IconTypes = {
  ARROW_RIGHT: "ARROW_RIGHT",
};

const Button = (props) => {
  if (props.href) {
    return (
      <Link href={props.href} className={styles.button}>
        {props.children}
        <Button.Icon iconType={props.icon} />
      </Link>
    );
  }
  return <button className={styles.button}>{props.children}</button>;
};

Button.Icon = ({ iconType }) => {
  if (iconType === "ARROW_RIGHT") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 25"
        width="1.1em"
        height="1.1em"
        className={styles.icon}
      >
        <path
          style={{ fill: "currentColor" }}
          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
          data-name="Right"
        />
      </svg>
    );
  }
  return null;
};

Button.Icon.displayName = "Icon";

export default Button;
