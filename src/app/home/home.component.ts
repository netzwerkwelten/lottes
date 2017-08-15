import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../shared/animation/transition';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
