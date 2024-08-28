import React from "react";
import { Accordion, CVAccordionContent, Header } from "../../organisms";
import { Outlet, useLocation } from "react-router-dom";

export const Dashboard: React.FC = () => {
  const location = useLocation();
  const accordionItems = [
    {
      id: 1,
      title: "dashboard.accordionItems.titles.cv",
      content: <CVAccordionContent />,
    },
  ];

  const showRightSide = location.pathname !== "/dashboard";

  return (
    <div className="flex flex-col-reverse sm:flex-col h-screen">
      <Header />
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2">
        <aside
          className={`list-none p-0 ${
            showRightSide ? "hidden md:block" : "block"
          }`}
        >
          <Accordion accordionItems={accordionItems} />
        </aside>
        <main className={`${showRightSide ? "block" : "hidden"} md:block`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
