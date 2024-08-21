
import  { Reservertable} from "./Tableclass.mjs"

const t1 = new Reservertable("Nalini",'5',"dinner","7pm");

export {t1};

export function makeReservation() {
    document.getElementById('reservation-status').textContent = "Table Reserved!";
}

export function setupReservationButton() {
    const reserveBtn = document.getElementById('reserve-btn');
    reserveBtn.addEventListener('click', makeReservation);
}