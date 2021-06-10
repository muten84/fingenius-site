import {
    animation, trigger, animateChild, group,
    transition, animate, style, query, state
  } from '@angular/animations';

  export const transAnimation = animation([
    style({
      height: '{{ height }}',
      opacity: '{{ opacity }}',
      backgroundColor: '{{ backgroundColor }}'
    }),
    animate('{{ time }}')
  ]);

  // Routable animations
  export const slideInAnimation =
    trigger('routeAnimations', [
      transition('HomePage <=> AboutPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
      transition('* <=> ServicePage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('200ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
      transition('* <=> ContactPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('200ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ])
    ]);

    export const SlideInOutAnimation = [
      trigger('slideInOut', [
          state('in', style({
              'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
          })),
          state('out', style({
              'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
          })),
          transition('in => out', [group([
              animate('400ms ease-in-out', style({
                  'opacity': '0'
              })),
              animate('600ms ease-in-out', style({
                  'max-height': '0px'
              })),
              animate('700ms ease-in-out', style({
                  'visibility': 'hidden'
              }))
          ]
          )]),
          transition('out => in', [group([
              animate('1ms ease-in-out', style({
                  'visibility': 'visible'
              })),
              animate('600ms ease-in-out', style({
                  'max-height': '500px'
              })),
              animate('800ms ease-in-out', style({
                  'opacity': '1'
              }))
          ]
          )])
      ]),
  ]