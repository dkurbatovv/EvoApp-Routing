import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EvoApp-Routing';
  constructor(
    private router: Router
    ) {}

  linkToAbout() {
    this.router.navigateByUrl("/about");
  }

  linkToContact() {
    this.router.navigateByUrl("/contact");
  }

  linkToItem() {
    this.router.navigateByUrl("/item/:id");
  }
}
