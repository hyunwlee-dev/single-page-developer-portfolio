import { ElementType, HTMLAttributes } from "react";
import styles from './container.module.css';
import clsx from "clsx";

interface IProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export default function Container({
  as: Component = 'div',
  className,
  children,
  ...props
}: IProps) {
  return (
    <Component
      className={clsx(styles.container, className)}
      {...props}
    >
      {children}
    </Component>
  );
}
