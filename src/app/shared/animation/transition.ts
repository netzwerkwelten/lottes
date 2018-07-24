import {trigger, state, animate, style, transition, query, stagger} from '@angular/animations';

export function routerTransition() {
  return fade();
}

function fade() {
  return trigger('routerTransition', [
    state('void', style({
      left: 0,
      margin: '0px',
      padding: '0',
      opacity: 1
    })),
    state('*', style({
      position: 'absolute',
      margin: '0px',
      left: 0,
      opacity: 1
    })),
    transition(':enter', [
      query('.content-middle', style({ opacity: 0 })),
      style({
        position: 'fixed',
        opacity: 0,
        filter: 'blur(15px)'
      }),
      animate('1.1s ease-in-out', style({
        left: 0,
        opacity: 1,
        margin: '0px',
        filter: 'blur(0px)'
      })),
      query('.content-middle', stagger(400, [
        style({ transform: 'translateY(100px)' }),
        animate('1s ease-in-out',
          style({ transform: 'translateY(0px)', opacity: 1 })),
      ]), { optional: true }),
      query('.text-box h2::before', stagger(400, [
        style({
          '-webkit-transform': 'translate3d(10px,0,0) scale(0,1)',
          transform: 'translate3d(10px,0,0) scale(0,1)'
        }),
        animate('1s ease-in-out',
          style({
            '-webkit-transform': 'translate3d(0,0,0) scale(1,1)',
            transform: 'translate3d(0,0,0) scale(1,1)'
          })),
      ]), { optional: true })
    ]),
    transition(':leave', [
      animate('0.9s linear', style({
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
