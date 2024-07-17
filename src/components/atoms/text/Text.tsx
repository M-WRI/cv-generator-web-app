import { Trans, useTranslation } from "react-i18next";
import { ReactElement } from "react";
import styles from "./text.module.css";

interface TextProps {
  translationKey: string;
  components?: ReactElement[];
  fontSize?: "base" | "sm" | "xs";
}

export const Text: React.FC<TextProps> = ({
  translationKey,
  components,
  fontSize = "base",
}) => {
  const { t } = useTranslation();

  const fontSizeClass = {
    base: styles.textBase,
    sm: styles.textSm,
    xs: styles.textXs,
  }[fontSize];

  const transProps = {
    t,
    i18nKey: translationKey,
    ...(components && { components }),
  };

  return (
    <p className={`${styles.text} ${fontSizeClass}`}>
      <Trans {...transProps} />
    </p>
  );
};
