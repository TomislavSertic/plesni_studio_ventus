import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { InstructorPageContent } from "../../components/InstructorsPage/InstructorPageContent";
import { Wrapper } from "../../components/Layout/Wrapper/Wrapper";
import { LightPageTitle } from "../../components/UI/LightPageTitle";
import { client } from "../../lib/sanity.client";
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
  if (!context.params) {
    return {
      props: {
        event: null,
      },
    };
  }
  const slug = context.params.instructorid;
  const instructorsListData = await client.fetch(`
  \*[_type=='instructors' && (
    !(_id in path("drafts.**")))]{
      ...,
      knowledge[]->
    }`);
  const instructor = instructorsListData.find(
    (instructor: IInstructors) => instructor.slug.current === slug
  );
  return {
    props: {
      instructor: instructor,
    },
    revalidate: 3600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const instructorsListData = await client.fetch(`
  \*[_type=='instructors' && (
    !(_id in path("drafts.**")))]`);
  const pathsList = instructorsListData.map((event: IInstructors) => {
    return { params: { instructorid: event.slug.current } };
  });
  return {
    paths: pathsList,
    fallback: false,
  };
};
