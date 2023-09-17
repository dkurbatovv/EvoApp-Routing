import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Передаем параметры запроса list=1 и enable=true при переходе на компонент list
    this.router.navigate(['/item/1/list'], { queryParams: { list: '1', enable: 'true' } });
  }
}