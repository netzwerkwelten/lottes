import { Component, OnInit, ElementRef } from '@angular/core';
import {
    Router,
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from "@angular/router";
import { TweenLite, ctx } from 'gsap';
import { routerTransition } from '../shared/animation/transition';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {

  private loading = true;
  private animation;

  public lFollowX = 0;
  public lFollowY = 0;
  public x = 0;
  public y = 0;
  public friction = 1 / 30;
  public width;
  public height;


  constructor(private router:Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.animation = 'out';
      this.navigationInterceptor(event);
    });
  }

  ngOnInit() {

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // this.moveBackground();
  }

  private navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
      this.animation = 'out';
      setTimeout(()=>{
        this.animation = 'out';
      },200);
    }
    if (event instanceof NavigationEnd) {

      this.loading = false;
      setTimeout(()=>{
        this.animation = '';
      },200);

    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.loading = false
    }
  }

  private moveBackground() {
    this.x += (this.lFollowX - this.x) * this.friction;
    this.y += (this.lFollowY - this.y) * this.friction;
    const translate = 'translate(' + this.x + 'px, ' + this.y + 'px) scale(1.1)';
    const canvas = document.getElementById('bg');
    canvas.setAttribute('style', '-webit-transform:' + translate + ';-moz-transform:'+ translate + '; transform:' + translate);
    window.addEventListener('mousemove', this.mouseMove.bind(this));
    window.requestAnimationFrame(this.moveBackground.bind(this));
  }

  private mouseMove(e) {
    var lMouseX = Math.max(-100, Math.min(100, this.width / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, this.height / 2 - e.clientY));
    this.lFollowX = (20 * lMouseX) / 100;
    this.lFollowY = (10 * lMouseY) / 100;
  }

}
