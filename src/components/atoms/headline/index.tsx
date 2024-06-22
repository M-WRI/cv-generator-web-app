import React from "react";
import "./headline.styles.css";

interface HeadlineProps {
  level: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
  className?: string;
}

export const Headline: React.FC<HeadlineProps> = ({
  level,
  children,
  className,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={`headline headline-${level} ${className ? className : ""}`}>
      {children}
    </Tag>
  );
};
