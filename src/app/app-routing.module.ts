import { RouterModule, Routes } from '@angular/router';

import { CollectionComponent } from './components/collection/collection.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { PackComponent } from './components/pack/pack.component';
import { TradeComponent } from './components/trade/trade.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
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
