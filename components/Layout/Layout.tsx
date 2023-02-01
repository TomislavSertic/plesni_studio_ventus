import React from "react";
import { Navigation } from "./Navigation/Navigation";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};
