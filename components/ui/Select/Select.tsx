"use client";

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
  return (
    <div className={styles.select}>
      <button
        type="button"
        className={styles.selectField}
        disabled={disabled}
      >
        <span className={value ? styles.filledText : styles.placeholderText}>
          {options.find((option) => option.value === value)?.label ||
            placeholder}
        </span>

        <span className={styles.chevron}>⌄</span>
      </button>

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
            onClick={() => onChange?.(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}