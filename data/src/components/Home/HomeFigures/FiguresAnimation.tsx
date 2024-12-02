import React, { useEffect } from 'react';
import anime from 'animejs';
import styles from './Figures.module.css';

const FiguresAnimation: React.FC = () => {
  useEffect(() => {
    const getClass = (className: string) => `.${styles[className]}`;

    anime({
      targets: [
        getClass('hero-figure-box-01'),
        getClass('hero-figure-box-02'),
        getClass('hero-figure-box-03'),
        getClass('hero-figure-box-04'),
        getClass('hero-figure-box-08'),
        getClass('hero-figure-box-09'),
        getClass('hero-figure-box-10'),
      ],
      duration: anime.random(600, 800),
      delay: anime.random(600, 800),
      rotate: [
        anime.random(-360, 360),
        (el: HTMLElement) => el.getAttribute('data-rotation') || '0deg',
      ],
      scale: [0.7, 1],
      opacity: [0, 1],
      easing: 'easeInOutExpo',
    });

    anime.timeline({
      targets: getClass('hero-figure-box-05'),
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: [0.05, 0.05],
      scaleY: [0, 1],
      perspective: '500px',
      delay: anime.random(0, 400),
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: 1,
    }).add({
      duration: 800,
      rotateY: '-15deg',
      rotateX: '8deg',
      rotateZ: '-1deg',
    });

    anime.timeline({
      targets: [
        getClass('hero-figure-box-06'),
        getClass('hero-figure-box-07'),
      ],
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: [0.05, 0.05],
      scaleY: [0, 1],
      perspective: '500px',
      delay: anime.random(0, 400),
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: 1,
    }).add({
      duration: 800,
      rotateZ: '20deg',
    });
  }, []);

  return null;
};

export default FiguresAnimation;
