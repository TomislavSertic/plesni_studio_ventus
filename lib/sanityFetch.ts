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

export const getDance = async (slug: string | string[]) => {
  const allDanceData = await client.fetch(`
    \*[_type=='dances' && (
        !(_id in path("drafts.**")))]{
            ...,
            categories[]->
        }`);
  const dance = allDanceData.find(
    (dance: IDances) => dance.slug.current === slug
  );

  return dance;
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

export const getAllDancesTeached = async () => {
  const dancesListData = await client.fetch(`
    \*[_type=='dances' && teaching==true && (
        !(_id in path("drafts.**")))]`);
  return dancesListData;
};
