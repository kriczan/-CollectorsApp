import { CardService } from './service/api/card.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CollectorsApp';

  dataFromApi: any;

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.getCards().subscribe(data => {
      this.dataFromApi = data;
    });
  }
}
