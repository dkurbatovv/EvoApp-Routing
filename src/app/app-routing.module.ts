import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { ItemDetailsComponent} from './item/item-details/item-details.component';
import { ItemStatsComponent} from './item/item-stats/item-stats.component';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'contact', 
    component: ContactComponent 
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: 'item/:id', 
    component: ItemComponent, 
    children: [
      { 
        path: 'details', 
        component: ItemDetailsComponent 
      },
      { 
        path: 'stats', 
        component: ItemStatsComponent 
      },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }