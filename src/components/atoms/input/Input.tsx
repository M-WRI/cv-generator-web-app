import React from "react";

interface InputProps {
  id: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  isDirty?: boolean;
  isError?: boolean;
}

export const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  required,
  isDirty,
  isError,
  ...rest
}) => {
  return (
    <div className="group">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className={` mb-4 border-none outline-none transition-all w-full ${
          isError
            ? "text-error-500 placeholder-error-500"
            : isDirty
            ? "text-primary-500"
            : "text-black placeholder-black group-hover:placeholder-primary-500"
        }`}
        {...rest}
      />
      <div
        className={`w-full h-[2px] transition-all ${
          isError
            ? "bg-error-500"
            : isDirty
            ? "bg-primary-500"
            : "bg-black group-hover:bg-primary-500"
        }`}
      />
    </div>
  );
};

export default Input;
