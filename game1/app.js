const player = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    attack: function(target) {
        if (Math.random() < this.accuracy) {
            target.hull -= this.firepower;
            displayMessage(`USS Assembly hits the Alien Ship! Alien Ship's hull is now ${target.hull}`);
        } else {
            displayMessage("USS Assembly missed!");
        }
    }
};

// Alien Ship constructor
function AlienShip() {
    this.hull = Math.floor(Math.random() * 4) + 3; // 3-6
    this.firepower = Math.floor(Math.random() * 3) + 2; // 2-4
    this.accuracy = Math.random() * 0.2 + 0.6; // 0.6-0.8
    this.attack = function(target) {
        if (Math.random() < this.accuracy) {
            target.hull -= this.firepower;
            displayMessage(`Alien Ship hits the USS Assembly! USS Assembly's hull is now ${target.hull}`);
        } else {
            displayMessage("Alien Ship missed!");
        }
    };
}

// Create Alien Fleet
    const alienFleet = [];
    for (let i = 0; i < 6; i++) {
        alienFleet.push(new AlienShip());
    }

// Display Alien Ships
const aliensDiv = document.getElementById('aliens');
alienFleet.forEach((alien, index) => {
    const alienDiv = document.createElement('div');
    alienDiv.classList.add('alien');
    alienDiv.id = `alien-${index}`;
    alienDiv.innerHTML = `<p>Alien ${index + 1}</p><p>Hull: ${alien.hull}</p>`;
    aliensDiv.appendChild(alienDiv);
});

// Attack button functionality
let currentAlienIndex = 0;
document.getElementById('attack-btn').addEventListener('click', () => {
    if (currentAlienIndex < alienFleet.length) {
        const currentAlien = alienFleet[currentAlienIndex];
        player.attack(currentAlien);

        if (currentAlien.hull <= 0) {
            displayMessage(`Alien Ship ${currentAlienIndex + 1} destroyed!`);
            document.getElementById(`alien-${currentAlienIndex}`).style.display = 'none';
            currentAlienIndex++;
        } else {
            currentAlien.attack(player);
            if (player.hull <= 0) {
                displayMessage("USS Assembly destroyed. Game over.");
                disableButtons();
            }
        }

        // Update player and alien hulls
        updateHullDisplay();
    } else {
        displayMessage("You destroyed all alien ships. You win!");
        disableButtons();
    }
});

// Retreat button functionality
document.getElementById('retreat-btn').addEventListener('click', () => {
    displayMessage("You retreated. Game over.");
    disableButtons();
});

// Update Hull Display
function updateHullDisplay() {
    document.getElementById('player-hull').textContent = player.hull;
    if (currentAlienIndex < alienFleet.length) {
        const currentAlien = alienFleet[currentAlienIndex];
        document.getElementById(`alien-${currentAlienIndex}`).innerHTML = `<p>Alien ${currentAlienIndex + 1}</p><p>Hull: ${currentAlien.hull}</p>`;
    }
}

// Display Message
function displayMessage(message) {
    document.getElementById('message').textContent = message;
}

// Disable Buttons after game ends
function disableButtons() {
    document.getElementById('attack-btn').disabled = true;
    document.getElementById('retreat-btn').disabled = true;
}