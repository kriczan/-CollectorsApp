export interface HttpResponse {
 data: HttpData[];
 meta: {};
}

export interface HttpData {
  id: number;
  attributes: HttpAttribute;
 }

 export interface HttpAttribute {
  createdAt: string;
  obverse: Card;
  publishedAt: string;
  reverse: Card;
  updatedAt: string;
 }

 export interface Card {
  data: {
    id: number;
    attributes: CardAttribute;
  };
 }

 export interface CardAttribute {
  alternativeText: null;
  caption: null;
  createdAt: "2024-01-11T15:56:19.585Z";
  ext: ".png";
formats
:
{,…};
hash
:
"Shawn_Kemp_444aae815c";
height
:
1050;
mime
:
"image/png";
name
:
"ShawnKemp.png";
previewUrl
:
null;
provider
:
"local";
provider_metadata
:
null;
size
:
624.01;
updatedAt
:
"2024-01-11T15:56:19.585Z";
url
:
"/uploads/Shawn_Kemp_444aae815c.png";
width
:
750;
 }
