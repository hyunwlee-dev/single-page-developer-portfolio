import { HTMLAttributes, ElementType } from "react";
import clsx from "clsx";
import styles from "./a11y-hidden.module.css";

interface IProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  htmlFor?: string;
}

export default function A11yHidden({
  as: Element = 'div',
  htmlFor,
  className,
  children,
  ...props
}: IProps) {
  return (
    <Element
      className={clsx(styles['a11y-hidden'], className)}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </Element>
  );
}

