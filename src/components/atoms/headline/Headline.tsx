import React from "react";

type HeadlineLevel = 1 | 2 | 3 | 4 | 5;

interface HeadlineProps {
  level: HeadlineLevel;
  children: React.ReactNode;
  className?: string;
}

export const Headline: React.FC<HeadlineProps> = ({
  level = 1,
  children,
  className,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={`${className ? className : ""}`}>{children}</Tag>;
};
