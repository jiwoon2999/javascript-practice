const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');

red.animate(
  {
    transform: [
      'translateX(50px) translateY(50px) rotate(0deg)',
      'translateX(600px)  translateY(50px) rotate(360deg)',
    ],
  },
  {
    duration: 1000,
    iterations: Infinity,
    direction: 'normal',
    easing: 'ease',
  }
);
blue.animate(
  {
    transform: [
      'translateX(0px) translateY(150px) rotate(120deg)',
      'translateX(600px) translateY(150px) rotate(-360deg)',
    ],
  },
  {
    duration: 2000,
    iterations: Infinity,
    direction: 'normal',
    easing: 'ease',
  }
);

green.animate(
  {
    transform: [
      'translateX(0px) translateY(200px) rotate(90deg)',
      'translateX(650px) translateY(200px) rotate(270deg)',
    ],
  },
  {
    duration: 3000,
    iterations: Infinity,
    direction: 'normal',
    easing: 'ease',
  }
);
