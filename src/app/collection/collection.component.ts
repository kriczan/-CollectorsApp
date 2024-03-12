import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent {

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
