"use client";

import Image from "next/image";
import styles from "./Select.module.css";

interface SelectProps {
  value?: string;
  placeholder?: string;
  options?: string[];
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export default function Select({
  value,
  placeholder = "Select one...",
  options = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
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
          {value || placeholder}
        </span>

        <Image
          src="/icons/Vector.svg"
          alt=""
          width={24}
          height={24}
        />
      </button>

      <div className={styles.selectList}>
        {options.map((option) => (
          <button
            type="button"
            key={option}
            className={
              option === value
                ? styles.selectItemActive
                : styles.selectItem
            }
            onClick={() => onChange?.(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}