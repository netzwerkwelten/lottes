import {Component, OnInit, ElementRef, Renderer2} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {TweenLite, ctx, TimelineMax } from 'gsap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private callapse = false;
  public draw: any;
  public left = '';
  public left2 = '';
  public top = '';
  public width;
  public height;
  public largeHeader;
  public canvas;
  public ctx ;
  public points;
  public target = {x: 0, y: 0};
  public animateHeader = true;

  constructor(private sanitizer: DomSanitizer,
              public renderer: Renderer2,
              private el: ElementRef) {

  }

  ngOnInit() {
     this.canvasAnimation();
  }

  public openNav(){
    this.callapse = !this.callapse;
    if(!this.callapse){
      this.removeListeners();
    }else{
      this.addListeners();
    }
  }

  public hoverdiv(e) {
    this.left = ( e.clientX - 45 ) / 2 + '';
    this.left2 = ( e.clientX - 45 ) / 2 * 1.3 + '';
    this.top = ( e.clientY - 45 ) / 2 + '';
  }

  private resetdiv() {
    this.left = '10px';
    this.top = '10px';
  }

  private menueStyle() {
    return this.sanitizer.bypassSecurityTrustStyle('transform: translate(' + this.left + 'px,' + this.top + 'px)');
  }

  private textStyle() {
    return this.sanitizer.bypassSecurityTrustStyle('transform: translate(' + this.left2 + 'px,' + this.top + 'px)');
  }

  private canvasAnimation() {
    this.initHeader();
    this.initAnimation();
  }

  private initHeader() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.target.x = this.width / 2
    this.target.y = this.height / 2;

    this.largeHeader = document.getElementById('large-header');
    this.largeHeader.style.height = this.height + 'px';

    this.canvas = document.getElementById('demo-canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.ctx = this.canvas.getContext('2d');
    // create points
    this.points = [];
    for (let x = 0; x < this.width; x = x + this.width / 25) {
      for (let y = 0; y < this.height; y = y + this.height / 25) {
        const px = x + Math.random() * this.width / 25;
        const py = y + Math.random() * this.height / 25;
        const p = {x: px, originX: px, y: py, originY: py};
        this.points.push(p);
      }
    }

    // for each point find the 5 closest points
    for (let i in this.points) {
      const closest = [];
      const p1 = this.points[i];
      for (let j in this.points) {
        const p2 = this.points[j];
        if (!(p1 === p2)) {
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (this.getDistance(p1, p2) < this.getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // assign a circle to each point
    for (let i in this.points) {
      const c = new this.Circle(this.points[i], 22 + Math.random() * 10, 'rgba(255,255,255,0.3)');
      this.points[i].circle = c;
    }
  }

  // Event handling
  private addListeners() {
    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', this.mouseMove.bind(this));
    }
    window.addEventListener('scroll', this.scrollCheck.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
  }
  private removeListeners() {
    if (!('ontouchstart' in window)) {
      window.removeEventListener('mousemove', this.mouseMove.bind(this));
    }
    window.removeEventListener('scroll', this.scrollCheck.bind(this));
    window.removeEventListener('resize', this.resize.bind(this));
  }

  private mouseMove(e) {
    let posy = 0;
    let posx = posy;
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else {
      if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
    }
    this.target.x = posx;
    this.target.y = posy;
  }

  private scrollCheck() {
    if (document.body.scrollTop > this.height) {
      this.animateHeader = false;
    } else {
      this.animateHeader = true;
    }
  }

  private resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.largeHeader.style.height = this.height + 'px';
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  private initAnimation() {
    this.animate();
    for (let i in this.points) {
      this.shiftPoint(this.points[i]);
    }
  }

  private animate() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      for (let i in this.points) {
        if (this.points[i]) {
          if (Math.abs(this.getDistance(this.target, this.points[i])) < 4000) {
            this.points[i].active = 0.3;
            this.points[i].circle.active = 0.6;
          } else if (Math.abs(this.getDistance(this.target, this.points[i])) < 20000) {
            this.points[i].active = 0.1;
            this.points[i].circle.active = 0.3;
          } else if (Math.abs(this.getDistance(this.target, this.points[i])) < 40000) {
            this.points[i].active = 0.02;
            this.points[i].circle.active = 0.1;
          } else {
            if (this.points[i] && this.points[i].circle ) {
              this.points[i].circle.active = 0;
              this.points[i].active = 0;
            }
          }
          this.drawLines(this.points[i]);
          if ( this.points[i].circle ) {
            this.drawer(this.points[i]);
          }
        }
      }
    requestAnimationFrame(this.animate.bind(this));
  }

  private shiftPoint(p) {
    const me = this;
    TweenLite.to(p, 1 + 0.8 * Math.random(), {
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100, ease: 'Circ.easeInOut',
      onComplete: function () {
          me.shiftPoint(p);
      }
    });
  }

  private drawLines(p) {
    if (!p.active) {
      return;
    }
    for (const i in p.closest) {
      this.ctx.beginPath();
      this.ctx.moveTo(p.x, p.y);
      this.ctx.lineTo(p.closest[i].x, p.closest[i].y);
      this.ctx.strokeStyle = 'rgba(235,255,235,' + p.active + ')';
      this.ctx.stroke();
    }
  }

  private Circle(_pos, _rad, _color) {
    const _this = this;
    const pos = _pos;
    const rad = _rad;
    const color = _color;
  }

  private drawer(pos) {
    this.ctx.beginPath();
    this.ctx.arc(pos.circle.x, pos.circle.y, pos.circle.rad, 0, 3 * Math.PI, false);
    this.ctx.fillStyle = 'rgba(235,255,235,' + pos.active + ')';
    this.ctx.fill();
  }

  private getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }


}
