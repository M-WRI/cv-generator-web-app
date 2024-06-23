import React, { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import "./styles.errorMessage.css";

interface ErrorMessageProps {
  name: string;
  components?: ReactElement[];
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  name,
  components,
}) => {
  const { t } = useTranslation();
  const {
    formState: { errors },
  } = useFormContext();

  const error: any = errors[name];

  const transProps = {
    t,
    i18nKey: error.message,
    ...(components && { components }),
  };

  return error ? (
    <p className="error-text">
      <Trans {...transProps} />
    </p>
  ) : null;
};
