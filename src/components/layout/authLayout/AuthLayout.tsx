import React from "react";
import "./authLayout.styles.css";

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
    <div className="auth-layout-container">
      <section
        className={`left-section ${left?.className ? left.className : ""}`}
      >
        {left.component}
      </section>
      {right && (
        <section
          className={`right-section ${right?.className ? right.className : ""}`}
        >
          {right.component}
        </section>
      )}
    </div>
  );
};
