

"use client";

import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className={styles.pagination}>

      {/* DESKTOP */}
      <div className={styles.desktop}>
        <button
          type="button"
          className={styles.sliderArrow}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Previous page"
        >
          <svg
            className={styles.arrowIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.09502 12.8518L12.5968 18.3533C12.7668 18.5236 12.8527 18.7236 12.8545 18.9533C12.8565 19.1829 12.7726 19.3836 12.6028 19.5553C12.4328 19.7274 12.2322 19.8125 12.001 19.8105C11.7699 19.8085 11.5686 19.7226 11.3973 19.5528L4.44727 12.6028C4.35627 12.5108 4.29011 12.4151 4.24877 12.3158C4.20727 12.2163 4.18652 12.1108 4.18652 11.9993C4.18652 11.8878 4.20727 11.7825 4.24877 11.6835C4.29011 11.5844 4.35627 11.4889 4.44727 11.3973L11.4033 4.44127C11.5791 4.27144 11.7805 4.18652 12.0075 4.18652C12.2344 4.18652 12.4328 4.27144 12.6028 4.44127C12.7726 4.61527 12.8575 4.81602 12.8575 5.04352C12.8575 5.27119 12.7726 5.47027 12.6028 5.64077L7.09502 11.1483H19.2978C19.5419 11.1483 19.7459 11.2291 19.9098 11.3908C20.0736 11.5524 20.1555 11.7555 20.1555 12C20.1555 12.2445 20.0736 12.4476 19.9098 12.6093C19.7459 12.7709 19.5419 12.8518 19.2978 12.8518H7.09502Z"
              fill="#4C2613"
            />
          </svg>
        </button>

        <button
          type="button"
          className={
            currentPage === 1
              ? `${styles.pageButton} ${styles.active}`
              : styles.pageButton
          }
          onClick={() => onPageChange(1)}
        >
          <span className={styles.pageNumber}>1</span>
        </button>

        <button
          type="button"
          className={
            currentPage === 2
              ? `${styles.pageButton} ${styles.active}`
              : styles.pageButton
          }
          onClick={() => onPageChange(2)}
        >
          <span className={styles.pageNumber}>2</span>
        </button>

        <button
          type="button"
          className={
            currentPage === 3
              ? `${styles.pageButton} ${styles.active}`
              : styles.pageButton
          }
          onClick={() => onPageChange(3)}
        >
          <span className={styles.pageNumber}>3</span>
        </button>

        <span className={styles.dots}>...</span>

        <button
          type="button"
          className={
            currentPage === totalPages
              ? `${styles.pageButton} ${styles.active}`
              : styles.pageButton
          }
          onClick={() => onPageChange(totalPages)}
        >
          <span className={styles.pageNumber}>{totalPages}</span>
        </button>

        <button
          type="button"
          className={styles.sliderArrow}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next page"
        >
          <svg
            className={styles.arrowIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.905 12.8518L11.4032 18.3533C11.2332 18.5236 11.1473 18.7236 11.1455 18.9533C11.1435 19.1829 11.2274 19.3836 11.3972 19.5553C11.5672 19.7274 11.7678 19.8125 11.999 19.8105C12.2301 19.8085 12.4314 19.7226 12.6027 19.5528L19.5527 12.6028C19.6437 12.5108 19.7099 12.4151 19.7512 12.3158C19.7927 12.2163 19.8135 12.1108 19.8135 11.9993C19.8135 11.8878 19.7927 11.7825 19.7512 11.6835C19.7099 11.5844 19.6437 11.4889 19.5527 11.3973L12.5967 4.44127C12.4209 4.27144 12.2195 4.18652 11.9925 4.18652C11.7656 4.18652 11.5672 4.27144 11.3972 4.44127C11.2274 4.61527 11.1425 4.81602 11.1425 5.04352C11.1425 5.27119 11.2274 5.47027 11.3972 5.64077L16.905 11.1483H4.7022C4.4581 11.1483 4.2541 11.2291 4.0902 11.3908C3.9264 11.5524 3.8445 11.7555 3.8445 12C3.8445 12.2445 3.9264 12.4476 4.0902 12.6093C4.2541 12.7709 4.4581 12.8518 4.7022 12.8518H16.905Z"
              fill="#4C2613"
            />
          </svg>
        </button>
      </div>

      {/* MOBILE */}
      <div className={styles.mobile}>
        <button
          type="button"
          className={styles.sliderArrow}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Previous page"
        >
          <svg
            className={styles.arrowIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.09502 12.8518L12.5968 18.3533C12.7668 18.5236 12.8527 18.7236 12.8545 18.9533C12.8565 19.1829 12.7726 19.3836 12.6028 19.5553C12.4328 19.7274 12.2322 19.8125 12.001 19.8105C11.7699 19.8085 11.5686 19.7226 11.3973 19.5528L4.44727 12.6028C4.35627 12.5108 4.29011 12.4151 4.24877 12.3158C4.20727 12.2163 4.18652 12.1108 4.18652 11.9993C4.18652 11.8878 4.20727 11.7825 4.24877 11.6835C4.29011 11.5844 4.35627 11.4889 4.44727 11.3973L11.4033 4.44127C11.5791 4.27144 11.7805 4.18652 12.0075 4.18652C12.2344 4.18652 12.4328 4.27144 12.6028 4.44127C12.7726 4.61527 12.8575 4.81602 12.8575 5.04352C12.8575 5.27119 12.7726 5.47027 12.6028 5.64077L7.09502 11.1483H19.2978C19.5419 11.1483 19.7459 11.2291 19.9098 11.3908C20.0736 11.5524 20.1555 11.7555 20.1555 12C20.1555 12.2445 20.0736 12.4476 19.9098 12.6093C19.7459 12.7709 19.5419 12.8518 19.2978 12.8518H7.09502Z"
              fill="#4C2613"
            />
          </svg>
        </button>

        <button
          type="button"
          className={
            currentPage === 1
              ? `${styles.pageButton} ${styles.active}`
              : styles.pageButton
          }
          onClick={() => onPageChange(1)}
        >
          <span className={styles.pageNumber}>1</span>
        </button>

        <button
          type="button"
          className={
            currentPage === 2
              ? `${styles.pageButton} ${styles.active}`
              : styles.pageButton
          }
          onClick={() => onPageChange(2)}
        >
          <span className={styles.pageNumber}>2</span>
        </button>

        <span className={styles.dots}>...</span>

        <button
          type="button"
          className={
            currentPage === totalPages
              ? `${styles.pageButton} ${styles.active}`
              : styles.pageButton
          }
          onClick={() => onPageChange(totalPages)}
        >
          <span className={styles.pageNumber}>{totalPages}</span>
        </button>

        <button
          type="button"
          className={styles.sliderArrow}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next page"
        >
          <svg
            className={styles.arrowIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.905 12.8518L11.4032 18.3533C11.2332 18.5236 11.1473 18.7236 11.1455 18.9533C11.1435 19.1829 11.2274 19.3836 11.3972 19.5553C11.5672 19.7274 11.7678 19.8125 11.999 19.8105C12.2301 19.8085 12.4314 19.7226 12.6027 19.5528L19.5527 12.6028C19.6437 12.5108 19.7099 12.4151 19.7512 12.3158C19.7927 12.2163 19.8135 12.1108 19.8135 11.9993C19.8135 11.8878 19.7927 11.7825 19.7512 11.6835C19.7099 11.5844 19.6437 11.4889 19.5527 11.3973L12.5967 4.44127C12.4209 4.27144 12.2195 4.18652 11.9925 4.18652C11.7656 4.18652 11.5672 4.27144 11.3972 4.44127C11.2274 4.61527 11.1425 4.81602 11.1425 5.04352C11.1425 5.27119 11.2274 5.47027 11.3972 5.64077L16.905 11.1483H4.7022C4.4581 11.1483 4.2541 11.2291 4.0902 11.3908C3.9264 11.5524 3.8445 11.7555 3.8445 12C3.8445 12.2445 3.9264 12.4476 4.0902 12.6093C4.2541 12.7709 4.4581 12.8518 4.7022 12.8518H16.905Z"
              fill="#4C2613"
            />
          </svg>
        </button>
      </div>

    </div>
  );
}

