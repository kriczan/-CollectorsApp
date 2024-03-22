import { ICardAmount } from "./ICardAmount";

export interface ICardCollection {
    userId: number;
    cardAmountList: ICardAmount[];
}