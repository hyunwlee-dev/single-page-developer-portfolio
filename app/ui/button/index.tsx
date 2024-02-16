import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import styles from './button.module.css';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export default function Button({ className, children, ...props }: IProps) {
  return (
    <button
      className={clsx(className, styles.button)}
      {...props}
    >
      {children}
    </button>
  )
}
