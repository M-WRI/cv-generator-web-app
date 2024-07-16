import React from "react";
import { ControllerFieldState } from "react-hook-form";
import "./input.styles.css";

interface InputProps {
  id: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  fieldState?: ControllerFieldState;
}

export const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  required,
  className,
  fieldState,
  ...rest
}) => (
  <>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      className={className}
      
      {...rest}
    />
    <div className={`border ${fieldState?.error ? "error" : ""}`} />
  </>
);

export default Input;
