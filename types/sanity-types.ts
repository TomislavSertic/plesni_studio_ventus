export interface IEvent {
  _id: string;
  eventStart: string;
  eventEnd: string;
  title: string;
  mainImage: string;
  description: string;
  author: string;
  body: any;
  eventPrice: number;
  eventVenue: string;
  eventVenueAddress: string;
  categories: ICategory[];
  slug: ISlug;
  organizator: IInstructors;
}
export interface IInstructors {
  bio: any;
  email: string;
  image: string;
  show: boolean;
  name: string;
  phoneNumber: string;
  surname: string;
  socials: ISocial[];
  slug: ISlug;
  _id: string;
  description: string;
  knowledge: IDances[];
}
export interface IDances {
  name: string;
  image: string;
  slug: ISlug;
  body: any;
  teaching: boolean;
  teachingOptions: string[];
  categories: ICategory[];
  _id: string;
}
export interface ISocial {
  url: string;
  socialName: "instagram" | "facebook" | "youtube";
  _key: string;
}
export interface ISlug {
  current: string[];
}
export interface ICategory {
  description: string;
  _id: string;
  title: string;
}
export interface IAuthor {
  bio: any;
  name: string;
  slug: ISlug;
  image: string;
  _id: string;
}
export interface IPost {
  _id: string;
  title: string;
  slug: ISlug;
  author: IAuthor;
  mainImage: string;
  categories: string[];
  publishedAt: string;
  description: string;
  body: any;
}
export interface INewsCard {
  _id: string;
  postType: string;
  title: string;
  slug: {
    current: string[];
  };
  author: string;
  mainImage: string;
  categories: string[];
  description: string;
  publishedAt: string;
}
export interface IClass {
  class: string;
  level: string;
  timeStart: string;
  timeEnd: string;
}
