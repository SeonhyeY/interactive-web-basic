const choices = document.querySelectorAll('a');
const cursorItem = document.querySelector('.cursorItem');
const circle = cursorItem.querySelector('.circle');

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
let speed = 0.3;

window.addEventListener('mousemove', (e) => {
  x = e.pageX;
  y = e.pageY;

  circle.style.display = 'block';
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;

  window.requestAnimationFrame(loop);
};
loop();

choices.forEach((item) => {
  item.addEventListener('mouseover', () => {
    circle.style.width = '30px';
    circle.style.height = '30px';
    circle.style.backgroundColor = '#f0edcc';
  });

  item.addEventListener('mouseout', () => {
    circle.style.width = '60px';
    circle.style.height = '60px';
    circle.style.backgroundColor = '#02343f';
  });
});
