export interface ICollectionResponse {
  data: ICollectionCardData[];
  meta: {};
}

export interface ICollectionCardData {
  selected: boolean;
  id: number;
  attributes: ICollectionDataAttribute;
}

export interface ICollectionDataAttribute {
  username: string;
  cardCollection: ICollectionCard;
}

export interface ICollectionCard {
  data: {
    id: number;
    attributes: ICollectionCardAttribute;
  };
}

export interface ICollectionCardAttribute {
  name: string;
  url: string;
}
