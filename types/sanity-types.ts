export interface IEvent {
  _id: string;
  eventStart: string;
  eventEnd: string;
  title: string;
  mainImage: string;
  description: string;

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
