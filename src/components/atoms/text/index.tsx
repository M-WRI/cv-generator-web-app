import { Trans, useTranslation } from "react-i18next";
import { ReactElement } from "react";
import "./text.styles.css";

export const Text = ({
  translationKey,
  components,
  fontSize = "base",
}: {
  translationKey: string;
  components?: ReactElement[];
  fontSize?: "base" | "sm" | "xs";
}) => {
  const { t } = useTranslation();

  const transProps = {
    t,
    i18nKey: translationKey,
    ...(components && { components }),
  };

  return (
    <p className={`tesxt text-${fontSize}`}>
      <Trans {...transProps} />
    </p>
  );
};
