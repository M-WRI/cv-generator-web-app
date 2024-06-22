import React from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { Input } from "../../atoms";
import "./inputFields.styles.css";
import { useTranslation } from "react-i18next";

interface InputFieldProps {
  name: string;
  type: "text" | "email" | "password" | "number";
  placeholder?: string;
  label?: string;
  required?: boolean;
  error?: FieldError;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  placeholder,
  error,
  required,
}) => {
  const { control } = useFormContext();
  const { t } = useTranslation();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field, fieldState }) => {
        return (
          <div>
            <Input
              id={name}
              type={type}
              placeholder={placeholder}
              required={required}
              className={`input ${field.value ? "dirty" : ""} ${
                error ? "error" : ""
              }`}
              fieldState={fieldState}
              {...field}
            />
            {error?.message && (
              <p className="error-message">{t(error.message)}</p>
            )}
          </div>
        );
      }}
    />
  );
};
