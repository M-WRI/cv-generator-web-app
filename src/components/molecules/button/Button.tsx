import { LoadingSpinner } from "../../atoms";

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
    outline:
      "bg-white text-primary-500 border-2 border-primary-500 hover:bg-primary-500 hover:text-white",
    primary: "bg-primary-500 text-white hoover:bg-white hover:text-primary-500",
  };

  return (
    <button
      className={`py-4 w-full font-bold rounded-2xl cursor-pointer flex justify-center transition-all ${styleMapping[style]}`}
      type={type}
      onClick={() => action && action()}
      disabled={isLoading}
    >
      {isLoading ? <LoadingSpinner /> : children}
    </button>
  );
};
