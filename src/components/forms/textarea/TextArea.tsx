import React from "react"
import { Field, ErrorMessage } from "formik"
import styles from "./TextArea.module.css"

interface TextAreaProps {
  label?: string
  name: string
  errors?: string
  touched?: boolean
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  errors,
  touched,
}) => {
  return (
    <div className={styles.formGroup}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}:
        </label>
      )}
      <Field
        as="textarea"
        id={name}
        name={name}
        className={`${styles.textarea} ${touched && errors && styles.error}`}
      />
      <ErrorMessage name={name} component="div" className={styles.errorMsg} />
    </div>
  )
}

export default TextArea
