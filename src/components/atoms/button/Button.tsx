import "./button.styles.css";

export const Button = ({
  type,
  children,
  style = "outline",
  action,
}: {
  children: string;
  type?: "submit" | "button";
  style?: "outline" | "primary";
  action: () => void;
}) => {
  return (
    <button className={`button ${style}`} type={type} onClick={() => action()}>
      {children}
    </button>
  );
};
