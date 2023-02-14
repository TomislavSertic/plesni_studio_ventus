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
  eventVenueAdress: string;
  categories: ICategory[];
  slug: ISlug;
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
