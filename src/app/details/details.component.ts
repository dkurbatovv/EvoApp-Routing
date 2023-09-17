import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  currentRouteParam: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentRouteParam = this.route.snapshot.paramMap.get('id');
    console.log('Current Route Param:', this.currentRouteParam);
  }
}