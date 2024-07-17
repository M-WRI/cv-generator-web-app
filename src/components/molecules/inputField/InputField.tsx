import React from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { Input } from "../../atoms";
import { useTranslation } from "react-i18next";
import styles from "./inputFields.module.css";

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
              isDirty={field.value ? true : false}
              isError={error ? true : false}
              fieldState={fieldState}
              {...field}
            />
            {error?.message && (
              <p className={styles.errorMessage}>{t(error.message)}</p>
            )}
          </div>
        );
      }}
    />
  );
};
