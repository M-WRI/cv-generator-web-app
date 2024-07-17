import { LoadingSpinner } from "../../atoms";
import styles from "./button.module.css";

export const Button = ({
  type,
  children,
  style = "outline",
  isLoading = false,
  action,
}: {
  children: string;
  type?: "submit" | "button";
  style?: "outline" | "primary";
  isLoading?: boolean;
  action?: () => void;
}) => {
  const styleMapping = {
    outline: styles.outline,
    primary: styles.primary,
  };

  return (
    <button
      className={`${styles.button} ${styleMapping[style]}`}
      type={type}
      onClick={() => action && action()}
      disabled={isLoading}
    >
      {isLoading ? <LoadingSpinner /> : children}
    </button>
  );
};
