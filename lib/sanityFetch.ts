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
