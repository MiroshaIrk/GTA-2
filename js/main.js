import { Player } from "./player.js";

const canvas = document.querySelector('canvas'); // получаю элемент canvas
const context = canvas.getContext('2d'); // ссылка на контекст для рисования в canvas
canvas.width = document.documentElement.clientWidth; // создаю размер canvas чтоб он был на всю ширину экрана
canvas.height = document.documentElement.clientHeight; // создаю размер canvas чтоб он был на всю высоту экрана

let player = new Player(canvas.width / 2, canvas.height / 2, context);

animate();

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);

  player.draw();
}