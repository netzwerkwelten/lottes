import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../shared/animation/transition';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class PhotosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
