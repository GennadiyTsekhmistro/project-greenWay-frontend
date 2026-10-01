"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./AuthPromptModal.module.css";

type AuthPromptModalProps = {
  onClose: () => void;
};

export default function AuthPromptModal({
  onClose,
}: AuthPromptModalProps) {
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
          <Image
            src="/icons/close.svg"
            alt=""
            width={24}
            height={24}
          />
        </button>

        <h2 className={styles.title}>
          Помилка під час додавання відгуку
        </h2>

        <p className={styles.description}>
          Щоб залишити відгук вам треба увійти, якщо ще немає облікового
          запису зареєструйтесь
        </p>

        <div className={styles.buttons}>
          <Link href="/login" className={styles.loginButton}>
            Увійти
          </Link>

          <Link href="/register" className={styles.registerButton}>
            Зареєструватись
          </Link>
        </div>
      </div>
    </div>
  );
}