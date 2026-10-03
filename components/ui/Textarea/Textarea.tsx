"use client";

import styles from "./Textarea.module.css";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  state?: "default" | "focus" | "error";
  errorMessage?: string;
}

export default function Textarea({
  state = "default",
  errorMessage,
  className,
  ...rest
}: TextareaProps) {
  return (
    <div className={styles.wrapper}>
      <textarea
        className={`${styles.textarea} ${styles[`${state}Border`]} ${
          className ?? ""
        }`}
        {...rest}
      />

      {state === "error" && errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
}