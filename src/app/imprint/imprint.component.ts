import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../shared/animation/transition';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ImprintComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

}
