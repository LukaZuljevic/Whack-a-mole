const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const scoreResult = document.querySelector(".score");
let score = 0;
let previousHole;
let gameLength = false;

function startGame() {
  scoreResult.innerText = 0;
  gameLength = false;
  score = 0;

  animateMole();

  setTimeout(() => (gameLength = true), 12000);
}

function randomHoles(holes) {
  let randomIndex = Math.floor(Math.random() * holes.length);
  let hole = holes[randomIndex];

  //provjera da se animacija ne desi na istoj rupi 2 puta za redom
  if (previousHole === hole) {
    randomHoles(holes);
  }

  previousHole = hole;

  return hole;
}

function animateMole() {
  let time = timeGenerator(600, 1200);
  let hole = randomHoles(holes);

  hole.classList.add("animation");

  setTimeout(() => {
    hole.classList.remove("animation");
    if (!gameLength) {
      animateMole();
    }
  }, time);
}

function timeGenerator(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function clickOnMole(mole) {
  mole.parentNode.classList.remove("animation");
  score++;
  scoreResult.innerText = score;
}

moles.forEach((mole) =>
  mole.addEventListener("click", () => {
    clickOnMole(mole);
  })
);
