import { ICard } from "../model/ICard";
import { ICardCollection } from "../model/ICardCollection";
import { CardService } from "../service/api/card.service";
import { CollectionService } from "../service/collection/collection.service";
import { StorageService } from "../service/storage/storage.service";

export class CardManagement {

    protected cards: ICard[] = [];
    protected userCollection: ICardCollection = {
        userId: 0,
        cardAmountList: []
    };

    constructor(protected cardService: CardService, protected storageService: StorageService, protected collectionService: CollectionService) { }

    protected setAllCards(): void {
        this.storageService.cardsObservator.subscribe(result => {
            this.cards = result;
        })
    }

    protected setUserCollection(): void {
        this.collectionService.getCollection(+localStorage.getItem("userId")!).subscribe(result => {
            this.userCollection = result;
        })
    }

    protected getCountOfTheSameCardInCollection(card: ICard): number {
        if (this.cards != null) {
            let cardNumber: number = 0;
            this.userCollection.cardAmountList.forEach(cardInCollection => {
                if (cardInCollection.cardId === card.id) {
                    cardNumber = cardInCollection.cardAmount;
                }
            });
            return cardNumber;
        }
        return 0;
    }
}