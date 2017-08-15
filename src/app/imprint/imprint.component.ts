import { Component, OnInit } from '@angular/core';
import { BaseRestService } from '../shared/services/base.rest.service';
import { routerTransition } from '../shared/animation/transition';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ImprintComponent implements OnInit {

  private data;

  constructor(
    // private baserestservice: BaseRestService
  ) { }

  ngOnInit() {
  }
  private getData() {

    // this.baserestservice.getData().subscribe(
    //     (response) => {
    //       this.data = response;
    //     }
    // );
  }
}
