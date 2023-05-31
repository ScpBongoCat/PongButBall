const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = 770;
let y = 570;
let vx = 0;
let vy = -10;
let P1H = 370;
let P1L = 470;
let P2H = 370;
let P2L = 470;

//Ball & Paddles
function update() {
  //Ball
  ctx.clearRect(x, y, canvas.height, canvas.width);
  x += vx;
  y += vy;

  ctx.fillRect(x, y, 50, 50);
  //Paddles

  ctx.fillRect(0, P1H, 40, P1L);

  ctx.fillRect(1610, P2H, 40, P2L);

  //Top & Bottom
  ctx.fillRect(0, 0, canvas.width, 40);

  ctx.fillRect(0, 1150, canvas.width, 40);

  if (x <= 50 && x >= 0 && y >= P1H && y <= P1H + P1L) {
    vx = 10;
    ctx;
    P1H = Math.floor(Math.random() * (680 - 40 + 1)) + 40;

    ctx.clearRect(0, 40, 40, 1110);

    //gconsole.log(P1H);
  }
  if (x >= 1560 && x <= 1610 && y >= P2H && y <= P2H + P2L) {
    vx = -10;
    P2H = Math.floor(Math.random() * (680 - 40 + 1)) + 40;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //console.log(P2H);
  }
  if (y <= 0 + 40) {
    vy = 10;
  }
  if (y >= 1190 - 90) {
    vy = -10;
  }
  requestAnimationFrame(update);
  //console.log(x);
  //console.log(y);
}
update();

//Ball Movement
window.addEventListener("keydown", function (e) {
  //console.log(e.key);
  if (e.key == "g") {
    vx = 10;
  }
  if (e.key == "w") {
    vy = -10;
  }
  if (e.key == "s") {
    vy = 10;
  }
});
Math.floor(Math.random() * (1140 - 40 + 1)) + 40;
