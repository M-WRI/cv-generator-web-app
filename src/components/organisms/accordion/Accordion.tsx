import { useState } from "react";
import { AccordionItem } from "../../molecules";
import styles from "./accordion.module.css";

export const Accordion = ({ accordionItems }: { accordionItems: any[] }) => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const handleAccordionClick = (id: number) => {
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <nav className={styles.accordion}>
      <ul className={styles.accordionItemList}>
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
