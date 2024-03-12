export interface ICardResponse {
  data: ICardData[];
  meta: {};
}

export interface ICardData {
  id: number;
  attributes: ICardDataAttribute;
}

export interface ICardDataAttribute {
  createdAt: string;
  obverse: ICard;
  publishedAt: string;
  reverse: ICard;
  updatedAt: string;
}

export interface ICard {
  data: {
    id: number;
    attributes: ICardAttribute;
  };
}

export interface ICardAttribute {
  alternativeText: null;
  caption: null;
  createdAt: string;
  ext: string;
  formats: {};
  hash: string;
  height: number;
  mime: string;
  name: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  size: number;
  updatedAt: string;
  url: string;
  width: number;
}
