import { Component, OnInit } from '@angular/core';
import {BaseRestService} from '../shared/services/base.rest.service'

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {

  private data;

  constructor(private BaseRestService: BaseRestService) { }

  ngOnInit() {
  }
  private getData(){

    this.BaseRestService.geData().subscribe(
        (response) => {
          this.data = response;
        }
    );
  }
}
