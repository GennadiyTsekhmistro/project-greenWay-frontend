'use client';

import { useEffect, useRef } from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: 'default' | 'focus' | 'error';
}

export default function Input({
  value,
  autoFocus = false,
  state = 'default',
  className,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  return (
    <input
      ref={inputRef}
      className={`${styles.input} ${
        value ? styles.filled : styles.placeholder
      } ${styles[`${state}Border`]} ${className ?? ''}`}
      value={value}
      autoFocus={autoFocus}
      {...rest}
    />
  );
}
