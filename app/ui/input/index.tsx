import React, { InputHTMLAttributes } from "react";
import clsx from "clsx";
import styles from './input.module.css';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, IProps>(({ error, className, ...props }, ref) => {
  return (
    <div
      className={clsx(styles['input-wrapper'], { [styles.error]: error }, className)}
    >
      <input
        className={styles.input}
        ref={ref}
        {...props}
      />
      {error && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}
    </div>
  )
});

Input.displayName = "Input";

export default Input;
