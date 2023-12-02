const h1 = document.querySelector('h1');
const mouse = document.querySelector('.mouse');

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
let speed = 0.01;

window.addEventListener('mousemove', (e) => {
  h1.innerText = `pageY: ${e.pageY}, 
  clientY: ${e.clientY}, 
  screenY: ${e.screenY}`;

  x = e.pageX;
  y = e.pageY;

  mouse.style.display = 'block';
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  mouse.style.left = `${targetX.toFixed(2)}px`;
  mouse.style.top = `${targetY.toFixed(2)}px`;
  window.requestAnimationFrame(loop);
};
loop();
