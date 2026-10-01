"use client";

import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";

import Image from "next/image";

import styles from "./AddReviewForm.module.css";

type AddReviewFormValues = {
  rating: number;
  review: string;
};

type AddReviewFormProps = {
  onClose: () => void;
};

const initialValues: AddReviewFormValues = {
  rating: 0,
  review: "",
};

const validationSchema = Yup.object({
  rating: Yup.number()
    .min(1, "Оберіть оцінку")
    .max(5, "Максимальна оцінка — 5")
    .required("Оберіть оцінку"),

  review: Yup.string()
    .required("Напишіть відгук")
    .min(10, "Відгук має містити щонайменше 10 символів"),
});

function RatingStars() {
  const { values, setFieldValue } = useFormikContext<AddReviewFormValues>();

  return (
    <div className={styles.rating}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={styles.star}
          onClick={() => setFieldValue("rating", star)}
          aria-label={`Оцінка ${star} з 5`}
        >
          <Image
            src={
              values.rating >= star
                ? "/icons/star_filled.svg"
                : "/icons/star_rate.svg"
            }
            alt=""
            width={32}
            height={32}
          />
        </button>
      ))}

      <ErrorMessage name="rating" component="p" />
    </div>
  );
}

export default function AddReviewForm({ onClose }: AddReviewFormProps) {
  const handleSubmit = async (values: AddReviewFormValues) => {
    console.log("Review:", values);

    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.reviewField}>
            <label className={styles.reviewLabel} htmlFor="review">
              Ваш відгук
            </label>

            <Field
              className={styles.reviewTextarea}
              as="textarea"
              id="review"
              name="review"
              placeholder="Напишіть ваш відгук"
              disabled={isSubmitting}
            />

            <ErrorMessage name="review" component="p" />
          </div>

          <RatingStars />

          <div className={styles.buttons}>
            <button
              className={styles.cancelButton}
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Відмінити
            </button>

            <button
              className={styles.submitButton}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Надсилання..." : "Надіслати"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
