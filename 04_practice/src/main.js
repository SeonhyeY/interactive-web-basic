let x = 0;
let y = 0;

let targetX = 0;
let targetY = 0;
let speed = 0.07;

const contentAll = document.querySelectorAll('.contWrap img');
const shadow = contentAll[0];
const date = contentAll[1];
const human = contentAll[2];
const textImg = contentAll[3];

const subTitle = document.querySelector('.subTitle');

window.addEventListener('mousemove', (e) => {
  x = e.pageX - window.innerWidth / 2;
  y = e.pageY - window.innerHeight / 2;

  mouseMove();
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  shadow.style.transform = `translateX(${targetX / 25}px)`;
  date.style.transform = `translateX(${-targetX / 10}px)`;
  human.style.transform = `translateX(${-targetX / 30}px)`;
  textImg.style.transform = `translateX(${targetX / 20}px)`;

  subTitle.style.transform = `translateY(${targetY / 40}px)`;

  window.requestAnimationFrame(loop);
};
loop();
