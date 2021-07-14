var canvas = document.getElementById("canvas");

const height = 800;
const width = 1100;
const barWidth = 20;
const barHeight = 100;
const ballSize = 50;

canvas.setAttribute('width', width);
canvas.setAttribute('height', height);

const createBackground = () => {
  const background = canvas.getContext("2d");

  background.fillRect(0, 0, width, height);
  background.fillStyle = 'black';

  return background;
};

const makeBar = (x, y) => {
  var bar = canvas.getContext("2d");

  bar.fillStyle = 'white';
  bar.fillRect(x, y, barWidth, barHeight);

  return bar;
};

const makeBall = (x, y) => {
  const ball = canvas.getContext("2d");

  ball.beginPath();
  ball.arc(x, y, ballSize, 0, 2 * Math.PI);
  ball.fillStyle = 'white';
  ball.stroke();

  return ball;
};

const getCenterPositionX = (objWidth) => width / 2 - objWidth / 2;
const getCenterPositionY = (objHeight) => height / 2 - objHeight / 2;

createBackground();
makeBar(10, getCenterPositionY(barHeight));
makeBar(width - barWidth - 10, getCenterPositionY(barHeight));
makeBall(100, 100)
