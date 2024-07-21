import React from "react";

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
    <div className="flex justify-around gap-8 items-center h-screen px-4">
      <section
        className={`w-full max-w-[300px] grid gap-8 ${
          left?.className ? left.className : ""
        }`}
      >
        {left.component}
      </section>
      {right && (
        <section
          className={`w-full max-w-[300px] grid gap-8 hidden md:block ${
            right?.className ? right.className : ""
          }`}
        >
          {right.component}
        </section>
      )}
    </div>
  );
};
