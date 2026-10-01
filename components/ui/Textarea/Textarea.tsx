"use client";

import styles from "./Textarea.module.css";

interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  state?: "default" | "focus" | "error";
  errorMessage?: string;
}

export default function Textarea({
  placeholder,
  value,
  onChange,
  disabled = false,
  state = "default",
  errorMessage,
}: TextareaProps) {
  return (
    <div className={styles.wrapper}>
      <textarea
        className={`${styles.textarea} ${styles[`${state}Border`]}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        readOnly={!onChange}
      />

      {state === "error" && errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
}