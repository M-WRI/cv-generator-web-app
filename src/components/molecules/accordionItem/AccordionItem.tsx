import { ReactNode } from "react";
import { Headline } from "../../atoms";
import { AccordionContentContainer } from "./AccordionContentContainer";
import "./accordionItem.styles.css";
import { useTranslation } from "react-i18next";

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
        className={`accordion-list-item ${activeItemId === id ? "active" : ""}`}
      >
        <Headline level={1} className="accordion-item-title">
          {t(title)}
        </Headline>
      </li>

      {activeItemId === id && (
        <AccordionContentContainer>{content}</AccordionContentContainer>
      )}
    </>
  );
};
