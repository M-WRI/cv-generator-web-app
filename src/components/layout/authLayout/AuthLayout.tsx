import React from "react";
import { Header } from "../../organisms";

export const AuthLayout = ({
  left,
  right,
}: {
  left: {
    component: React.ReactNode;
    className?: string;
  };
  right?: {
    component: React.ReactNode;
    className?: string;
  };
}) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow justify-around gap-8 items-center px-4">
        <section
          className={`w-full max-w-[300px] grid gap-8 ${
            left?.className ? left.className : ""
          }`}
        >
          {left.component}
        </section>
        {right && (
          <section
            className={`w-full max-w-[300px] hidden md:block ${
              right?.className ? right.className : ""
            } ${right ? "grid gap-8" : ""}`}
          >
            {right.component}
          </section>
        )}
      </div>
    </div>
  );
};
