"use client";

import { useState } from "react";
import styles from "./Select.module.css";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value?: string;
  placeholder?: string;
  options?: SelectOption[];
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export default function Select({
  value,
  placeholder = "Select one...",
  options = [],
  onChange,
  disabled = false,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={styles.select}>
      <button
        type="button"
        className={styles.selectField}
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={value ? styles.filledText : styles.placeholderText}>
          {options.find((option) => option.value === value)?.label ||
            placeholder}
        </span>

        <svg className={styles.chevron} aria-hidden="true">
          <use href="/sprite.svg#icon-chevron-down" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.selectList}>
          {options.map((option) => (
            <button
              type="button"
              key={option.value}
              className={
                option.value === value
                  ? styles.selectItemActive
                  : styles.selectItem
              }
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}