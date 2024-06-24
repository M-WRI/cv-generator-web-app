import { ReactNode } from "react";

export const AccordionContentContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <div className="content-container">{children}</div>;
};
