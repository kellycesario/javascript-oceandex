import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Button({
  href,
  size,
  color,
  fontsize,
  className,
  title,
  img,
  icon,
}) {
  const classList = [];
  classList.push(styles[`button--${size}`]);
  classList.push(styles[`button--${color}`]);
  classList.push(styles[`button--${fontsize}`]);
  classList.push(styles[`button`]);

  const Router = useRouter();
  console.log(Router.query);

  return href[0] !== "#" ? (
    <Link href={`${href}`}>
      <>
        <a className={`${classList.join(" ")} ${className}`}>{title}</a>
        {Router.pathname === "/" ||
        Router.pathname === "/trophic-level" ? null : (
          <img className={styles[`button__icon`]} src={icon} alt="ocean" />
        )}
      </>
    </Link>
  ) : (
    <a href={`${href}`} className={`${classList.join(" ")} ${className}`}>
      {title}
    </a>
  );
}
