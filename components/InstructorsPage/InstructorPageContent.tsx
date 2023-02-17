import React from "react";
import { IInstructors } from "../../types/sanity-types";

export const InstructorPageContent: React.FC<{ instructor: IInstructors }> = ({
  instructor,
}) => {
  console.log(instructor);
  return <div>InstructorPageContent</div>;
};
