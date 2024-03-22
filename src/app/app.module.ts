import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CollectionComponent } from './components/collection/collection.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { PackComponent } from './components/pack/pack.component';
import { TradeComponent } from './components/trade/trade.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackComponent,
    CollectionComponent,
    TradeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
