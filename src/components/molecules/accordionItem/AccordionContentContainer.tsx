import { ReactNode } from "react";
import styles from "./accordionItem.module.css";

export const AccordionContentContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <div className={styles.contentContainer}>{children}</div>;
};
