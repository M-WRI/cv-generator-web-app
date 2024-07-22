import React from "react";
import { Accordion, CVAccordionContent, Header } from "../../organisms";
import { Outlet } from "react-router-dom";

export const Dashboard: React.FC = () => {
  const accordionItems = [
    {
      id: 1,
      title: "dashboard.accordionItems.titles.cv",
      content: <CVAccordionContent />,
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow grid grid-cols-2 gap-4">
        <aside className="list-none p-0">
          <Accordion accordionItems={accordionItems} />
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
