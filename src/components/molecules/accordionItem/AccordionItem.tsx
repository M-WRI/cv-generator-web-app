import { ReactNode } from "react";
import { Headline } from "../../atoms";
import { AccordionContentContainer } from "./AccordionContentContainer";
import { useTranslation } from "react-i18next";
import styles from "./accordionItem.module.css";

export const AccordionItem = ({
  id,
  url,
  title,
  content,
  activeItemId,
  handleAccordionClick,
}: {
  id: number;
  url: string;
  title: string;
  content: ReactNode;
  activeItemId: number | null;
  handleAccordionClick: (id: number, url: string) => void;
}) => {
  const { t } = useTranslation();

  return (
    <>
      <li
        onClick={() => handleAccordionClick(id, url)}
        className={`${styles.accordionListItem} ${
          activeItemId === id ? styles.active : ""
        }`}
      >
        <Headline level={1} className={styles.accordionItemTitle}>
          {t(title)}
        </Headline>
      </li>

      {activeItemId === id && (
        <AccordionContentContainer>{content}</AccordionContentContainer>
      )}
    </>
  );
};
