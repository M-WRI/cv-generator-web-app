import React, { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import styles from "./errorMessage.module.css";

interface InputErrorMessageProps {
  name: string;
  components?: ReactElement[];
}

export const InputErrorMessage: React.FC<InputErrorMessageProps> = ({
  name,
  components,
}) => {
  const { t } = useTranslation();
  const {
    formState: { errors },
  } = useFormContext();

  const error: any = errors[name];

  if (!error || !error.message) {
    return null;
  }

  const transProps = {
    t,
    i18nKey: error.message,
    ...(components && { components }),
  };

  return (
    <p className={styles.errorText}>
      <Trans {...transProps} />
    </p>
  );
};
