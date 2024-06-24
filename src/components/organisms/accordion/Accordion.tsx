import { useState } from "react";
import { AccordionItem } from "../../molecules";
import "./accordion.styles.css";

export const Accordion = ({ accordionItems }: { accordionItems: any[] }) => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const handleAccordionClick = (id: number, url: string) => {
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <nav className={`accordion`}>
      <ul className="accordion-item-list">
        {accordionItems.map((item) => (
          <AccordionItem
            handleAccordionClick={handleAccordionClick}
            activeItemId={activeItemId}
            {...item}
          />
        ))}
      </ul>
    </nav>
  );
};
