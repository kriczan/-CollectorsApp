import { Component } from '@angular/core';
import { CardService } from './service/api/card.service';
import { StorageService } from './service/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'CollectorsApp';

  constructor(private cardService: CardService, private storageService: StorageService) { }

  ngOnInit() {
    this.cardService.getCards().subscribe(result => {
      this.storageService.setCards(result);
    })
  }
}
