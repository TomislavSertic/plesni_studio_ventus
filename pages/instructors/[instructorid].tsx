import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { InstructorPageContent } from "../../components/InstructorsPage/InstructorPageContent";
import { Wrapper } from "../../components/Layout/Wrapper/Wrapper";
import { LightPageTitle } from "../../components/UI/LightPageTitle";
import { client } from "../../lib/sanity.client";
import { getAllInstructorsPaths, getInstructor } from "../../lib/sanityFetch";
import { IInstructors } from "../../types/sanity-types";

export const InstructorPage: React.FC<{ instructor: IInstructors }> = ({
  instructor,
}) => {
  return (
    <Wrapper>
      {instructor ? (
        <>
          <LightPageTitle title={instructor.name + " " + instructor.surname} />

          <InstructorPageContent instructor={instructor} />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Wrapper>
  );
};
export default InstructorPage;

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params || !context.params.instructorid) {
    return {
      props: {
        event: null,
      },
    };
  }
  const slug = context.params.instructorid;
  const instructor = await getInstructor(slug);
  return {
    props: {
      instructor: instructor,
    },
    revalidate: 3600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pathsList = await getAllInstructorsPaths();
  return {
    paths: pathsList,
    fallback: false,
  };
};
