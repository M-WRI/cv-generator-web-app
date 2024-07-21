import React from "react";

type HeadlineLevel = 1 | 2 | 3 | 4 | 5;

interface HeadlineProps {
  level: HeadlineLevel;
  children: React.ReactNode;
  type?: "primary" | "black" | "error";
  className?: string;
}

export const Headline: React.FC<HeadlineProps> = ({
  level = 1,
  children,
  type = "primary",
  className,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const headlineType = `text-${type}-500`;

  return (
    <Tag className={`${className ? className : ""} ${headlineType}`}>
      {children}
    </Tag>
  );
};
