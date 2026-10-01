"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./ConfirmationModal.module.css";

type ConfirmationModalProps = {
  title: string;
  description: string;
  confirmButtonText: string;
  cancelButtonText: string;
  onConfirm: () => Promise<void> | void;
  onCancel: () => void;
};

export default function ConfirmationModal({
  title,
  description,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  onCancel,
}: ConfirmationModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isLoading) {
        onCancel();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCancel, isLoading]);

  const handleConfirm = async () => {
    try {
      setIsLoading(true);

      await onConfirm();

      onCancel();
    } catch (error) {
      console.error("Confirmation request failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={styles.backdrop}
      onClick={!isLoading ? onCancel : undefined}
    >
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={onCancel}
          disabled={isLoading}
          aria-label="Закрити"
        >
          <Image src="/icons/close.svg" alt="" width={24} height={24} />
        </button>

        <div className={styles.text}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={onCancel}
            disabled={isLoading}
          >
            {cancelButtonText}
          </button>

          <button
            type="button"
            className={styles.confirmButton}
            onClick={handleConfirm}
            disabled={isLoading}
          >
            {isLoading ? "Завантаження..." : confirmButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
