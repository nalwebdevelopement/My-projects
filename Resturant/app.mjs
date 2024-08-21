import { displayMenu } from './Menus.mjs';
import { setupReservationButton } from './Table.mjs';
import { displayContactInfo } from './contact.mjs';
import {t1} from './Table.mjs';

document.addEventListener('DOMContentLoaded', () => {
   // displayMenu();            // Load and display the menu items
    setupReservationButton(); // Setup reservation button event listener
    displayContactInfo();      // Display contact information
});

// document.getElementById("menus").addEventListener('click', () =>
// {
//     displayMenu();
//     document.getElementById("menus")
// });

document.getElementById("menus").addEventListener('mouseover', () =>
    {
        displayMenu();
        document.getElementById("menus")
    });
    document.getElementById("menus").addEventListener('mouseout', () =>
        {
            const menuElement = document.getElementById('menu');
            menuElement.innerHTML = '';
        });

       