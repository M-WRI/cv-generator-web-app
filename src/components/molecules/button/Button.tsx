import { LoadingSpinner } from "../../atoms";
import "./button.styles.css";

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
  return (
    <button
      className={`button ${style}`}
      type={type}
      onClick={() => action && action()}
      disabled={isLoading}
    >
      {isLoading ? <LoadingSpinner /> : children}
    </button>
  );
};
