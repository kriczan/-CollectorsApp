import { ICardData } from "../model/ICardResponse";
import { CardService } from "../service/api/card.service";
import { StorageService } from "../service/storage/storage.service";

export class CardManagement {

    protected databaseUrl = 'http://localhost:1337';
    protected cards: ICardData[] = [];
    protected userCards: ICardData[] = [];

    constructor(protected cardService: CardService, protected storageService: StorageService) { }

    protected getAllCards() {
        this.cardService.getCards().subscribe(result => {
            this.cards = result.data;
        })
    }

    protected getUserCollection() {
        this.storageService.userCollectionObservator.subscribe(result => {
            this.userCards = result;
        })
    }

    protected getCardImageUrl(card: ICardData): string {
        return this.databaseUrl + card.attributes.obverse.data.attributes.url;
    }

    protected getCardName(card: ICardData): string {
        return card.attributes.obverse.data.attributes.name;
    }
}