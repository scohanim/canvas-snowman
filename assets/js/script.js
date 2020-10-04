const $canvas = document.querySelector('.game-area');
const ctx = $canvas.getContext('2d');

// draw the head
function drawHead() {
  const x = $canvas.width / 4;
  const y = $canvas.height / 5;
  const radius = $canvas.width / 9;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.lineWidth = 5;
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.fillStyle = 'white';
  ctx.fill();
}

// draw the left eye
function drawLeftEye() {
  const x = $canvas.width / 4 - 20;
  const y = $canvas.height / 5 - 10;
  const radius = 10;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'black';
  ctx.fill();
}

// draw the right eye
function drawRightEye() {
  const x = $canvas.width / 4 + 20;
  const y = $canvas.height / 5 - 10;
  const radius = 10;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'black';
  ctx.fill();
}
// draw the nose
function drawNose() {
  const x = $canvas.width / 4;
  const y = $canvas.height / 5 + 10;
  const radius = 10;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'orange';
  ctx.fill();
}

// draw the body
function drawBody() {
  const x = $canvas.width / 4;
  const y = $canvas.height / 5 + 142;
  const radius = $canvas.width / 6;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.fillStyle = 'white';
  ctx.fill();
}
// draw the top button
function drawTopButton() {
  const x = $canvas.width / 4;
  const y = $canvas.height / 8 + 140;
  const radius = 10;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'black';
  ctx.fill();
}
// draw the middle button
function drawMiddleButton() {
  const x = $canvas.width / 4;
  const y = $canvas.height / 8 + 180;
  const radius = 10;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'black';
  ctx.fill();
}
// draw the bottom button
function drawBottomButton() {
  const x = $canvas.width / 4;
  const y = $canvas.height / 8 + 220;
  const radius = 10;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'black';
  ctx.fill();
}

// draw in order of back to front
drawHead();
drawLeftEye();
drawRightEye();
drawNose();
drawBody();
drawTopButton();
drawMiddleButton();
drawBottomButton();
