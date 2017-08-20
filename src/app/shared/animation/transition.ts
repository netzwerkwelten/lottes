import {trigger, state, animate, style, transition} from '@angular/animations';

export function routerTransition() {
  return fade();
}

function fade() {
  return trigger('routerTransition', [
    state('void', style({
      left: 15,
      padding: '10vh 5vh 5vh 10vh',
      opacity: 1
    })),state('*', style({
      position: 'absolute',
      left: 15,
      padding: '10vh 5vh 5vh 10vh',
      opacity: 1
    })),
    transition(':enter', [
      style({
        position: 'fixed',
        left: '100%',
        opacity: 0,
        filter: 'blur(15px)'
      }),
      animate('1.1s ease-in-out', style({
        left: 15,
        opacity: 1,
        padding: '10vh 5vh 5vh 10vh',
        filter: 'blur(0px)'
      }))
    ]),
    transition(':leave', [
      animate('0.9s ease-in-out', style({
        left: '-100%',
        opacity: 0,
        filter: 'blur(15px)'
      }))
    ])
  ]);
}

function slideToRight() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'fixed', width:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
    ])
  ]);
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'fixed', width:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);
}

function slideToBottom() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
    state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(100%)'}))
    ])
  ]);
}

function slideToTop() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
    state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
    ])
  ]);
}
