import React from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { Input, Text } from "../../atoms";

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

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => {
        return (
          <div>
            <Input
              id={name}
              type={type}
              placeholder={placeholder}
              required={required}
              isDirty={field.value ? true : false}
              isError={error ? true : false}
              {...field}
            />

            {error?.message && (
              <Text
                translationKey={error?.message}
                className="text-sm text-error-500 mt-2"
              />
            )}
          </div>
        );
      }}
    />
  );
};
