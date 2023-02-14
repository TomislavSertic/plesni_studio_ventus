export interface IEvent {
  _id: string;
  eventStart: string;
  eventEnd: string;
  title: string;
  mainImage: string;
  description: string;
  author: string;
  body: any;
  slug: {
    current: string[];
  };
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
