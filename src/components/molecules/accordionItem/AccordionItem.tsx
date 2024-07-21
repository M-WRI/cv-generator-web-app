import { ReactNode } from "react";
import { Headline } from "../../atoms";
import { AccordionContentContainer } from "./AccordionContentContainer";
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
  const isActive = activeItemId === id ? true : false;

  return (
    <>
      <li
        onClick={() => handleAccordionClick(id, url)}
        className={`cursor-pointer p-4 flex items-center shrink-0 border-black-500 ${
          isActive ? "bg-primary-500 border-b-2 text-white" : "border-t-2"
        }`}
      >
        <Headline level={1} className="font-normal">
          {t(title)}
        </Headline>
      </li>

      {activeItemId === id && (
        <AccordionContentContainer>{content}</AccordionContentContainer>
      )}
    </>
  );
};
