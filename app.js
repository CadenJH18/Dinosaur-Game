const dino = document.getElementById("character");
const cactus = document.getElementById("obstacle");

function jump() {
  if (character.classList != "jump") {
    character.classList.add("jump");

    setTimeout(function () {
        character.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

  // get current cactus X position
  let obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );

  // detect collision
  if (obstacleLeft < 50 && obstacleLeft > 0 && characterTop >= 140) {
    // collision
    alert("You Died");
    // return function() {counter += 1; return counter};
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});

let greeting = function() {
    alert("Welcome to Dino Jump, Press *space* to begin!")
}

//death counter
// const add = (function() {
//     let counter = 0;
// })