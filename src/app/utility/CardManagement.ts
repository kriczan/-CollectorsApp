import { ICard } from "../model/ICard";
import { ICollectionCardData } from "../model/ICollectionResponse";
import { CardService } from "../service/api/card.service";
import { StorageService } from "../service/storage/storage.service";

export class CardManagement {

    protected cards: ICard[] = [];
    protected userCards: ICollectionCardData[] = [];

    constructor(protected cardService: CardService, protected storageService: StorageService) { }

    protected getAllCards(): void {
        this.storageService.cardsObservator.subscribe(result => {
            this.cards = result;
        })
    }

    protected getUserCollection(): void {
        this.cardService.getUserCollection().subscribe(result => {
            this.userCards = result.data.filter(card => card.attributes.username === localStorage.getItem("username"));
        });
    }
}