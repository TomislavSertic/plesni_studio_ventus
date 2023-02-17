import React from "react";

export const InfoBox: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>{children}</ul>
    </div>
  );
};
