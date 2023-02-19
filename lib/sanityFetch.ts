import { IClass, IDances, IInstructors } from "../types/sanity-types";
import { client } from "./sanity.client";

export const getAllInstructors = async () => {
  const groqQueryInstructors = `\*[_type=='instructors' && (
        !(_id in path("drafts.**")))]{
          ...,
          knowledge[]->
        }`;

  const instructorsData = await client.fetch(groqQueryInstructors);
  return instructorsData;
};
export const getInstructor = async (slug: string | string[]) => {
  const instructorsListData = await client.fetch(`
  \*[_type=='instructors' && (
    !(_id in path("drafts.**")))]{
      ...,
      knowledge[]->
    }`);
  const instructor = instructorsListData.find(
    (instructor: IInstructors) => instructor.slug.current === slug
  );

  return instructor;
};
export const getAllInstructorsPaths = async () => {
  const instructorsListData = await client.fetch(`
\*[_type=='instructors' && (
  !(_id in path("drafts.**")))]`);
  const pathsList = instructorsListData.map((event: IInstructors) => {
    return { params: { instructorid: event.slug.current } };
  });
  return pathsList;
};

export const getAllDancesPaths = async () => {
  const eventsListData = await client.fetch(`
    \*[_type=='dances' && (
        !(_id in path("drafts.**")))]`);
  const pathsList = eventsListData.map((event: IDances) => {
    return { params: { classid: event.slug.current } };
  });
  return pathsList;
};
