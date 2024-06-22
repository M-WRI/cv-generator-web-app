import React from "react";
import "./authLayout.styles.css";

export const AuthLayout = ({
  left,
  right,
}: {
  left: React.ReactNode;
  right?: React.ReactNode;
}) => {
  return (
    <div className="auth-layout-container">
      <section className="left-section">{left}</section>
      {right && <section className="right-section">{right}</section>}
    </div>
  );
};
