import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {TweenLite, ctx, TimelineMax} from 'gsap';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        this.introStart();
    }

    public introStart() {
        const aboutAnimation = new TimelineMax({repeat: -1});

        aboutAnimation
            .to('.load', .5, {
                autoAlpha: 0,
                y: '-40%',
                display: 'none',
                delay: 2
            })
            .set('.aboutAni', {
                scale: '1.001',
            })

            .from('.aboutAni', 1, {
                scale: 1,
                autoAlpha: 0,
                y: '20px',
                width: '100px',
                height: '20px',
                ease: 'Elastic.easeOut.config(1, 0.5)'
            })
            .from('.text-design', .3, {
                autoAlpha: 0,
                y: '-20px',
                ease: 'Power3.easeOut'
            })
            .from('.head', .5, {
                autoAlpha: 0,
                y: '-20px',
                ease: 'Power3.easeOut'
            })
            .staggerFrom('.box', .5, {
                autoAlpha: 0,
                y: '-20px',
                ease: 'Power3.easeOut'
            }, '.15', '-=.3')
            .to('.text-design', .3, {
                display: 'none',
                autoAlpha: 0,
                y: '20px',
                ease: 'Power3.easeIn',
                delay: .5
            })
            .to('.design', .5, {
                autoAlpha: 0,
                y: '20px',
                ease: 'Power3.easeIn',
                display: 'none'
            })
            .to('.aboutAni', 1, {
                scale: '.3',
                ease: 'Elastic.easeInOut.config(1, 0.75)'
            }, '-=.5')
            .to('.aboutAni', 1, {
                rotation: '360deg',
                ease: 'Elastic.easeOut.config(1, 0.75)'
            }, '-=.5')
            .to('.aboutAni', 1, {
                scale: '1',
                ease: 'Elastic.easeInOut.config(1, 0.75)'
            }, '-=.75')
            .from('.text-develop', .3, {
                display: 'none',
                autoAlpha: 0,
                y: '-20px',
                ease: 'Power3.easeOut'
            }, '-=.5')
            .from('.develop', .5, {
                autoAlpha: 0,
                ease: 'Power3.easeOut'
            }, '-=1')
            .from('.sidebar', .5, {
                autoAlpha: 0,
                ease: 'Power3.easeOut',
                x: '-20px'
            }, '-=.3')
            .staggerFrom('.line', .3, {
                autoAlpha: 0,
                y: '-20px',
                ease: 'Power4.easeOut'
            }, '.15', '-=.3')
            .to('.text-develop', .3, {
                display: 'none',
                autoAlpha: 0,
                y: '20px',
                ease: 'Power3.easeIn',
                delay: .7
            })
            .to('.develop', .1, {
                autoAlpha: 0,
                y: '20px',
                ease: 'Power3.easeIn'
            }, '-=.3')
            .to('.aboutAni', 1, {
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                top: '50%',
                y: '-50%',
                autoAlpha: 0,
                ease: 'Elastic.easeInOut.config(1, 0.75)'
            })
            .fromTo('.browser', 1, {
                autoAlpha: 0,
                scale: .5
            }, {
                autoAlpha: 1,
                scale: 1,
                y: '-50%',
                borderRadius: '50%',
                ease: 'Elastic.easeOut.config(1, 0.75)'
            }, '-=1')
            .to('.browser', 1, {
                width: '100%',
                height: '210px',
                borderRadius: '5px',
                delay: 1,
                ease: 'Elastic.easeOut.config(1, 0.75)'
            }, '-=.5')
            .fromTo('.text-screen', .3, {
                autoAlpha: 0,
                y: '-10px'
            }, {
                autoAlpha: 1,
                y: '0'
            }, '-=.5')
            .to('.icon', .3, {
                autoAlpha: 0,
                display: 'none',
                ease: 'Power3.easeIn'
            })
            .fromTo('.header', .3, {
                autoAlpha: 0,
                y: '-10px'
            }, {
                autoAlpha: 1,
                y: '0'
            })
            .to('.header, .body', .3, {
                autoAlpha: 0,
                y: '10px',
                display: 'none',
                delay: 1.2
            })
            .to('.browser', 1, {
                width: '200px',
                ease: 'Elastic.easeOut.config(1, 0.75)'
            })
            .fromTo('.tablet', .3, {
                autoAlpha: 0,
                y: '-10px'
            }, {
                autoAlpha: 1,
                y: '0'
            }, '-=.3')
            .to('.tablet', .3, {
                autoAlpha: 0,
                y: '10px',
                display: 'none',
                delay: .7
            })
            .to('.browser', 1, {
                width: '90px',
                height: '160px',
                ease: 'Elastic.easeOut.config(1, 0.75)'
            })
            .fromTo('.phone', .3, {
                autoAlpha: 0,
                y: '-10px'
            }, {
                autoAlpha: 1,
                y: '0'
            }, '-=.5')
            .to('.text-screen', .3, {
                autoAlpha: 0,
                y: '10px',
                display: 'none',
                delay: .7
            })
            .fromTo('.text-web', .3, {
                autoAlpha: 0,
                y: '-10px'
            }, {
                autoAlpha: 1,
                y: '0'
            })
            .to('.phone', .3, {
                autoAlpha: 0,
                y: '10px',
                display: 'none'
            })
            .to('.body', 0, {
                autoAlpha: 1,
                y: '0',
                display: '',
                height: '100%',
                padding: 0
            })
            .to('.browser', 1, {
                width: '10px',
                height: '10px',
                ease: 'Elastic.easeInOut.config(1, 0.75)'
            })
            .to('.browser', 1, {
                width: '200px',
                height: '200px',
                borderRadius: '5px',
                ease: 'Elastic.easeOut.config(1, 0.75)'
            }, '-=.3')
            .to('.text-web', .3, {
                autoAlpha: 0,
                y: '10px',
                display: 'none'
            })
            .to('.browser', 0.5, {
                width: '0px',
                height: '0px',
                borderRadius: '5px',
                ease: 'Elastic.easeOut.config(1, 0.75)'
            }, '-=.5')
            .fromTo('.more', .3, {
                alpha: 0,
                y: '-80%',
                display: ''
            }, {
                autoAlpha: 1,
                y: '-50%'
            })
            .to('.more', .3, {
                alpha: 0,
                y: '10px',
                display: 'none',
                delay: 1
            })
            .to('.browser', 0, {
                maxWidth: 'initial',
                maxHeight: 'initial'
            })
            .to('.browser', 1, {
                width: '100%',
                height: '100%',
                borderRadius: '0%',
                ease: 'Power4.easeOut',
                alpha: 0
            })
            .to('.browser-wrap', .5, {
                autoAlpha: 0,
                display: 'none'
            })
            .to('.intro', .5, { //Here end of intro starts
                autoAlpha: 0,
                display: 'none'
            })
            .from('footer', .1, {
                autoAlpha: 0,
            })
            .to('footer', .2, {
                autoAlpha: 1,
            })
            .from('header', .1, {
                top: -10,
            })
            .to('header', .2, {
                top: 20,
            })
            .from('.wrapper', .1, {
                autoAlpha: 0,
                scale: '0.01'
            })
            .to('.wrapper', .2, {
                autoAlpha: 1,
                scale: '1'
            });


    }
}
