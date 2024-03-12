import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) { }

  goToPack() {
    this.router.navigate(['/pack']);
  }

  goToCollection() {
    this.router.navigate(['/collection']);
  }

  goToTrade() {
    this.router.navigate(['/trade']);
  }
}
