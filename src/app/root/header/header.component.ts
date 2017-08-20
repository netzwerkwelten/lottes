import { Component, OnInit } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private callapse = false;
  public left = '';
  public left2 = '';
  public top = '';
  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }
  public hoverdiv(e) {
    this.left = ( e.clientX - 45 ) / 2 + '';
    this.left2 = ( e.clientX - 45 ) / 2 * 1.3 + '';
    this.top  = ( e.clientY - 45 ) / 2 + '';
  }

  private resetdiv() {
    this.left  ='10px';
    this.top  = '10px';
  }

  private menueStyle() {
    return  this.sanitizer.bypassSecurityTrustStyle('transform: translate(' + this.left + 'px,' + this.top + 'px)');
  }
  private textStyle() {
    return  this.sanitizer.bypassSecurityTrustStyle('transform: translate(' + this.left2 + 'px,' + this.top + 'px)');
  }
}
