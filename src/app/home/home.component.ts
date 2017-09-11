import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../shared/animation/transition';
import { TweenLite, ctx, TimelineMax, TweenMax } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {
  public sceneAnimation:any;

  constructor() {

  }

  ngOnInit() {
    this.sceneStart();
  }

  public sceneStart(){



    this.sceneAnimation = new TimelineMax({repeat: 0});
    this.sceneAnimation
        .staggerFrom('.scene_wrapper', 1, {
          autoAlpha: 0,
          ease: 'Power3.easeOut',
          delay: 1
        }, '.15', '-=.3')
        .to(".tree1", 2, { yPercent: 0, scale: 1.15, ease: 'Power3.easeOut' }, 0)
        .to(".tree2", 2, { yPercent: 0, scale: 1.2, ease: 'Power3.easeOut' }, 0)
        .to(".tree3", 2, { yPercent: 0, scale: 1.1, ease: 'Power3.easeOut' }, 0)
        .to(".tree4", 2, { yPercent: 0, scale: 1.1, ease: 'Power3.easeOut' }, 0)
        .to(".flower", 2, { yPercent: 0, scale: 1.1, ease: 'Power3.easeOut' }, 0.2)
        .to(".flower2", 2, { yPercent: 0, scale: 1.05, ease: 'Power3.easeOut' }, 0.2)
        .to(".element1", 2, { autoAlpha: 0, yPercent: 0, x: -500, scale: 1.5, ease: 'Power3.easeOut' }, 0.2)
        .to(".border", 0, { yPercent: 0, scale: 1.2, ease: 'Power3.easeOut' }, 0)
        .add("levitate", 3)
        .to(".tree1", 2, { yPercent: 0, scale: 1, ease: 'Power3.easeInOut' },"levitate")
        .to(".tree2", 2, { yPercent: 0, scale: 1, ease: 'Power3.easeInOut' },"levitate")
        .to(".tree3", 2, { yPercent: 0, scale: 1, ease: 'Power3.easeInOut' },"levitate")
        .to(".tree4", 2, { yPercent: 0, scale: 1, ease: 'Power3.easeInOut' },"levitate")
        .to(".flower", 2, { yPercent: 0, scale: 1, ease: 'Power3.easeInOut' },"levitate")
        .to(".flower2", 2, { y: 10, scale: 1.4, x: 0, ease: 'Power3.easeInOut' },"levitate")
        .to(".element1", 2, { autoAlpha: 0.7, y: 10, scale: 1, x: 0, ease: 'Power3.easeInOut' },"levitate")
        .to(".border", 1, { y: 0, scale: 1.05, ease: 'Power3.easeInOut' },"levitate")


        ;
  }

  //scene_wrapper


}
