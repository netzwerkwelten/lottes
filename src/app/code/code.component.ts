import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../shared/animation/transition';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class CodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
