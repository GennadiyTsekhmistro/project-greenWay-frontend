"use client";

import { useEffect } from "react";
import Image from "next/image";

import AddReviewForm from "../AddReviewForm/AddReviewForm";
import styles from "./AddReviewModal.module.css";

type AddReviewModalProps = {
  onClose: () => void;
};

export default function AddReviewModal({ onClose }: AddReviewModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Закрити"
        >
          <Image src="/icons/close.svg" alt="" width={24} height={24} />
        </button>

        <h2 className={styles.title}>Залишити відгук</h2>

        <AddReviewForm onClose={onClose} />
      </div>
    </div>
  );
}
