import React from "react";
import { ControllerFieldState } from "react-hook-form";
import styles from "./input.module.css";

interface InputProps {
  id: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  fieldState?: ControllerFieldState;
  isDirty?: boolean;
  isError?: boolean;
}

export const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  required,
  fieldState,
  isDirty,
  isError,
  ...rest
}) => (
  <>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      className={`${styles.input} ${isDirty ? styles.dirty : ""} ${
        isError ? styles.error : ""
      }`}
      {...rest}
    />
    <div className={`${styles.border} ${fieldState?.error ? "error" : ""}`} />
  </>
);

export default Input;
