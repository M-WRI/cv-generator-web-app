import React from "react";
import styles from "./headline.module.css";

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
  const levelClass = styles[`headline${level}`];

  return (
    <Tag
      className={`${styles.headline} ${levelClass} ${
        className ? className : ""
      }`}
    >
      {children}
    </Tag>
  );
};
