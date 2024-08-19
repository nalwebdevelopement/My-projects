const alien = ["p1","p2","p3","p4","p5","p6"];


const player = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    attack: function(target) {
        imageHitLoad();
        setTimeout( () =>
        {
        if (Math.random() < this.accuracy) {
           // imageHitLoad();
            target.hull -= this.firepower;
            displayMessage(`USS Assembly hits the Alien Ship! Alien Ship's hull is now ${target.hull}`);
        } else {
            displayMessage("USS Assembly missed!");
        }
        removeHitLoad();
    },1000);
 
}
};




function AlienShip() {
    this.hull = Math.floor(Math.random() * 4) + 3; // 3-6
    this.firepower = Math.floor(Math.random() * 3) + 2; // 2-4
    this.accuracy = Math.random() * 0.2 + 0.6; // 0.6-0.8
    this.attack = function(target) {
        imageHitLoad();
        setTimeout(() =>
        {
        if (Math.random() < this.accuracy) {
            //  displayMessage(`The Math.radom`)
           
            target.hull -= this.firepower;
            displayMessage(`Alien Ship hits the USS Assembly! USS Assembly's hull is now ${target.hull}`);
           // removeHitLoad();
        } else {
            displayMessage("Alien Ship missed!");
          //  removeHitLoad();
        }
        removeHitLoad();
    },1000);
    };
}
const noofalienships = [];
for (let i = 0; i < 6; i++) {
    noofalienships.push(new AlienShip());
}
console.log(noofalienships)


const aliensDiv = document.getElementById('aliens');
noofalienships.forEach((alien, index) => {
    const alienDiv = document.createElement('div');
    alienDiv.style.display =  "flex";
    alienDiv.classList.add('alien');
    alienDiv.id = `alien-${index}`;
    alienDiv.innerHTML = `<p>Alien  ${index + 1}</p><br>      <p>Hull:  ${alien.hull}</p>`;
    aliensDiv.appendChild(alienDiv);
});

function imageHitLoad()
{
    let img1 = document.createElement('img');
    img1.src = "XZ5N.gif";
    img1.setAttribute('id',"hitload");
    img1.setAttribute('width','50px');
    img1.setAttribute('height','50px');
    document.getElementById("play-ship").appendChild(img1);
   
}
// function moveImage()
// {
//     const i = document.getElementById("hitload");
//     i.style.left = "600px";

// }
function removeHitLoad()
{
   const r =  document.getElementById("hitload")
  // r.parentNode.removeChild(r);
  r.remove();

}

let currentAlienIndex = 0;
document.getElementById('attack-btn').addEventListener('click', () => {
    //console.log("SFSDFSD");
   
   // moveImage();
    if (currentAlienIndex < noofalienships.length) {
        const currentAlien = noofalienships[currentAlienIndex];
        player.attack(currentAlien);
       // window.alert(currentAlien.hull)
        if (currentAlien.hull <= 0) {
            displayMessage(`Alien Ship ${currentAlienIndex + 1} destroyed!`);
           // removeHitLoad();    
           // const myTime = setTimeout(removeHitLoad(),5000);
            document.getElementById(`alien-${currentAlienIndex}`).style.display = 'none';
            currentAlienIndex++;
          //  window.alert("image removed");
           // const myTime = setTimeout(removeHitLoad(),5000);
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

function updateHullDisplay() {
    document.getElementById('player-hull').textContent = player.hull;
    if (currentAlienIndex < noofalienships.length) {
        const currentAlien = noofalienships[currentAlienIndex];
        document.getElementById(`alien-${currentAlienIndex}`).innerHTML = `<p>Alien ${currentAlienIndex + 1}</p><p>Hull: ${currentAlien.hull}</p>`;
    }
}


function displayMessage(message) {
    document.getElementById('message').textContent = message;
}

// Disable Buttons after game ends
function disableButtons() {
    document.getElementById('attack-btn').disabled = true;
    document.getElementById('retreat-btn').disabled = true;
}


AlienShip()