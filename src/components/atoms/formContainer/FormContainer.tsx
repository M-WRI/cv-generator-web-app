import { ReactNode } from "react";

export const FormContainer = ({
  children,
  onSubmit,
}: {
  children: ReactNode;
  onSubmit: () => void;
}) => {
  return (
    <form onSubmit={onSubmit} className="grid gap-8">
      {children}
    </form>
  );
};
