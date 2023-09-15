const player = document.querySelector("#player");
const area = document.querySelector("#playArea");

let playerPosLeft = parseInt(
  getComputedStyle(player).getPropertyValue("--playerPos_left")
);
let playerPosTop = parseInt(
  getComputedStyle(player).getPropertyValue("--playerPos_top")
);

let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;
let jumpUp = false;

console.log(area.offsetHeight);

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyW") {
    moveUp = true;
  }
  if (event.code === "KeyA") {
    moveLeft = true;
  }
  if (event.code === "KeyS") {
    moveDown = true;
  }
  if (event.code === "KeyD") {
    moveRight = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.code === "KeyW") {
    moveUp = false;
  }
  if (event.code === "KeyA") {
    moveLeft = false;
  }
  if (event.code === "KeyS") {
    moveDown = false;
  }
  if (event.code === "KeyD") {
    moveRight = false;
  }
});

function updatePlayerPosition() {
  let moveAmount = 5;

  if (moveUp) {
    if (playerPosTop > 0) {
      playerPosTop -= moveAmount;
    }
  }
  if (moveLeft) {
    if (playerPosLeft > 0) {
      playerPosLeft -= moveAmount;
    }
  }
  if (moveDown) {
    if (playerPosTop < area.offsetHeight) {
      playerPosTop += moveAmount;
    }
  }
  if (moveRight) {
    if (playerPosLeft < area.offsetWidth) {
      playerPosLeft += moveAmount;
    }
  }

  player.style.top = `${playerPosTop}px`;
  player.style.left = `${playerPosLeft}px`;

  requestAnimationFrame(updatePlayerPosition);
}

updatePlayerPosition();
