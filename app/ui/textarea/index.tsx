import React, { TextareaHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./textarea.module.css"

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;

}
const TextArea = React.forwardRef<HTMLTextAreaElement, IProps>(({ error, className, ...props }, ref) => {
  return (
    <div
      className={clsx(styles['textarea-wrapper'], { [styles.error]: error }, className)}
    >
      <textarea
        className={styles.textarea}
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

TextArea.displayName = "TextArea";
export default TextArea;
