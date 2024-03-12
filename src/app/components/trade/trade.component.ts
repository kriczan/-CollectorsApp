import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.scss'
})
export class TradeComponent {

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
