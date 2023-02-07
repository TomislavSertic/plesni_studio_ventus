export interface IEvent {
  _id: string;
  eventStart: string;
  eventEnd: string;
  title: string;
  slug: {
    current: string[];
  };
}
