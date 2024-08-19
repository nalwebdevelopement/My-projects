const readline = require('readline');

// USS Assembly
const ussAssembly = {
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
  attack: function (target) {
    if (Math.random() < this.accuracy) {
      console.log("USS Assembly hits the alien ship!");
      target.hull -= this.firepower;
    } else {
      console.log("USS Assembly missed!");
    }
  }
};

// Alien Ship constructor function
function AlienShip() {
  this.hull = Math.floor(Math.random() * 4) + 3; // Random between 3 and 6
  this.firepower = Math.floor(Math.random() * 3) + 2; // Random between 2 and 4
  this.accuracy = Math.random() * 0.2 + 0.6; // Random between 0.6 and 0.8
  this.attack = function (target) {
    if (Math.random() < this.accuracy) {
      console.log("Alien ship hits the USS Assembly!");
      target.hull -= this.firepower;
    } else {
      console.log("Alien ship missed!");
    }
  };
}

// Function to prompt user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to handle user input for retreat
function askForRetreat(callback) {
  rl.question("Do you want to retreat? (yes/no): ", function(answer) {
    callback(answer.toLowerCase() === 'yes');
  });
}

// Game initialization
function startGame() {
  const alienShips = [];
  for (let i = 0; i < 6; i++) {
    alienShips.push(new AlienShip());
  }

  let currentAlien = 0;

  function battle() {
    if (currentAlien >= alienShips.length) {
      console.log("You destroyed all alien ships. You win!");
      rl.close();
      return;
    }

    console.log(`Battle with Alien Ship ${currentAlien + 1}`);
    while (ussAssembly.hull > 0 && alienShips[currentAlien].hull > 0) {
      // Player attacks first
      ussAssembly.attack(alienShips[currentAlien]);
      if (alienShips[currentAlien].hull <= 0) {
        console.log(`Alien Ship ${currentAlien + 1} destroyed!`);
        currentAlien++;

        if (currentAlien < alienShips.length) {
          askForRetreat((retreat) => {
            if (retreat) {
              console.log("You retreated. Game over.");
              rl.close();
            } else {
              battle();
            }
          });
        } else {
          console.log("You destroyed all alien ships. You win!");
          rl.close();
        }
        return;
      } else {
        // Alien ship attacks if it's still alive
        alienShips[currentAlien].attack(ussAssembly);
        if (ussAssembly.hull <= 0) {
          console.log("USS Assembly destroyed. Game over.");
          rl.close();
          return;
        }
      }
    }
  }

  battle();
}

// Start the game
startGame();