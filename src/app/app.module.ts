import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { ItemDetailsComponent } from './item/item-details/item-details.component';
import { ItemStatsComponent } from './item/item-stats/item-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ItemComponent,
    DetailsComponent,
    ListComponent,
    ItemDetailsComponent,
    ItemStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
