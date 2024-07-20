import { Trans, useTranslation } from "react-i18next";
import { ReactElement } from "react";

interface TextProps {
  translationKey?: string;
  components?: ReactElement[];
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  translationKey,
  components,
  className,
}) => {
  const { t } = useTranslation();

  const transProps = {
    t,
    i18nKey: translationKey,
    ...(components && { components }),
  };

  return (
    <p className={`${className ? className : ""}`}>
      <Trans {...transProps} />
    </p>
  );
};
