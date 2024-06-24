import React from "react";
import { Accordion } from "../../organisms";
import "./dashboard.styles.css";

export const Dashboard: React.FC = () => {
  const accordionItems = [
    {
      id: 1,
      title: "dashboard.accordionItems.titles.cv",
      content: <CVAccordionContent />,
      url: "/dashboard/cv",
    },
  ];

  return (
    <div className="dashboard-container">
      <aside className="sidebar-container">
        <Accordion accordionItems={accordionItems} />
      </aside>
      <main>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard</p>
      </main>
    </div>
  );
};

const CVAccordionContent = () => {
  return (
    <div className="content">
      <h1>CV Content</h1>
      <p>This is the content for CV.</p>
    </div>
  );
};
