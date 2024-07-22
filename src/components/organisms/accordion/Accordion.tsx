import { useState } from "react";
import { AccordionItem } from "../../molecules";

export const Accordion = ({ accordionItems }: { accordionItems: any[] }) => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const handleAccordionClick = (id: number) => {
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <nav className="h-full border-r-2 border-black-500">
      <ul className="h-full flex flex-col justify-end">
        {accordionItems.map((item) => (
          <AccordionItem
            key={item.id}
            handleAccordionClick={handleAccordionClick}
            activeItemId={activeItemId}
            {...item}
          />
        ))}
      </ul>
    </nav>
  );
};
