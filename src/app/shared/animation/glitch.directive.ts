import { Directive, ElementRef } from '@angular/core';
import {TweenLite, ctx, TimelineMax } from 'gsap';

@Directive({
  selector: '[appGlitch]',
  host: {
    '(mouseenter)': 'onMouseEnter()'
  }
})
export class GlitchDirective {
  private el: HTMLElement;

  constructor(el: ElementRef) { this.el = el.nativeElement; }

  onMouseEnter() {
    this.highlight();
  }

  private highlight() {
    var tl = new TimelineMax({repeat: 0,repeatDelay: 0});
    tl.to('.menu-list-link h2', 0.01, {skewX:70,ease: 'Power.easeInOut'})
        .to('.menu-list-link h2', 0.04, {skewX:0,ease: 'Power4.easeInOut'})
        .to('.menu-list-link h2', 0.04, {opacity:0})
        .to('.menu-list-link h2', 0.04, {opacity:1})
        .to('.menu-list-link h2', 0.04, {x:-20})
        .to('.menu-list-link h2', 0.04, {x:0})
        .to('.top', 0.02, {x:-20,ease: 'Power4.easeInOut'},'split')
        .to('.bottom', 0.05, {x:20,ease: 'Power4.easeInOut'},'split')
        .to('.menu-list-link h2', 0.08, { className: '+=redShadow'},'split')

        .to('.menu-list-link', 0, { scale:1.1},'split')
        .to('.menu-list-link', 0, { scale:1}, "+=0.02")

        .to('.menu-list-link h2', 0.02, { className: '-=redShadow'}, "+=0.09")
        .to('.menu-list-link h2', 0.03,{ className: '+=greenShadow'},'split')
        .to('.menu-list-link h2', 0.03,{ className: '-=greenShadow'},"+=0.01")

        .to('.top', 0.2, {x:0,ease: 'Power4.easeInOut'})
        .to('.bottom', 0.2, {x:0,ease: 'Power4.easeInOut'})

        .to('.menu-list-link h2', 0.02, {scaleY:1.1,ease: 'Power4.easeInOut'})
        .to('.menu-list-link h2', 0.01, {scaleY:1,ease: 'Power4.easeInOut'})

  }

}
