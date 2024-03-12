import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CollectionComponent } from './collection/collection.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { PackComponent } from './pack/pack.component';
import { TradeComponent } from './trade/trade.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackComponent,
    CollectionComponent,
    TradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
