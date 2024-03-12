import { RouterModule, Routes } from '@angular/router';

import { CollectionComponent } from './collection/collection.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PackComponent } from './pack/pack.component';
import { TradeComponent } from './trade/trade.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pack', component: PackComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'trade', component: TradeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
