import { loadCalendar} from "./date.js";
import { saveEvent, deleteEvent, closeModal } from "./modals.js";

// event listeners for the previous and next buttons
// initButtons() = function to initialize the buttons event listeners
// the buttons increment or decrement the monthCounter variable and then call the load Calendar function
export function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    monthCounter++;
    loadCalendar();
  });

  document.getElementById('previousButton').addEventListener('click', () => {
    monthCounter--;
    loadCalendar();
  });

  document.getElementById('saveButton').addEventListener('click', saveEvent);
  document.getElementById('cancelButton').addEventListener('click', closeModal);
  document.getElementById('deleteButton').addEventListener('click', deleteEvent);
  document.getElementById('closeButton').addEventListener('click', closeModal);
}