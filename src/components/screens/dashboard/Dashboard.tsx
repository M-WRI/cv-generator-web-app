import React from "react";
import { Accordion, CVAccordionContent } from "../../organisms";
import { Outlet } from "react-router-dom";
import "./dashboard.styles.css";

export const Dashboard: React.FC = () => {
  const accordionItems = [
    {
      id: 1,
      title: "dashboard.accordionItems.titles.cv",
      content: <CVAccordionContent />,
    },
  ];

  return (
    <div className="dashboard-container">
      <aside className="sidebar-container">
        <Accordion accordionItems={accordionItems} />
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
