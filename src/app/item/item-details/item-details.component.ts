import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  constructor (
    private activeRouter: ActivatedRoute
    ) {}

    ngOnInit() {
      const currentRouteParam = console.log(this.activeRouter.snapshot.params)
      console.log('Текущий параметр маршрута:', currentRouteParam);
    }
}
