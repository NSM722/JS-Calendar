import { loadCalendar } from "/date.js";

// day/date that is clicked on
let clicked = null;

// https://www.geeksforgeeks.org/javascript-localstorage/
// array of event objects - the array is manipulated depending on the user adding or deleting events
globalThis.events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');

// Function accepts date clicked on by the user and opens the Modal
export function openModal(clickedDate) {
  clicked = clickedDate;

  // Looping through the events array of objects to check if an event already exists
  // for the day and if it does, the modal that pops up will offer the user the 
  // option to delete the event instead of showing create a new event modal popping up
  const eventForDay = events.find(event => event.clickedDate === clicked);

  // If event exists, show the delete event modal otherwise show the new event modal
  if (eventForDay) {
    document.getElementById('eventText').innerText = eventForDay.title;
    // Initial style in css is set to display: none;
    deleteEventModal.style.display = 'block';
  } else {
    // Initial style in css is set to display: none;
    newEventModal.style.display = 'block';
  }

  backDrop.style.display = 'block';
}

// Closes the modal on the clicked date
export function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  // clear the input
  eventTitleInput.value = '';
  // clear clickedDate from being the initial day date clicked to null 
  clicked = null;
  loadCalendar();
}

export function saveEvent() {
  if (eventTitleInput.value) {
    // If any content/value exists in the input section, 
    // then get rid of the error class which highlights
    // the input section red when attempting to save the event

    eventTitleInput.classList.remove('error');
    // if there's a value in the input we push the value to the events array

    events.push({
      clickedDate: clicked,
      title: eventTitleInput.value,
    });

    // Saving the event in the local storage
    localStorage.setItem('events', JSON.stringify(events));

    //close the modal once you click on the save button
    closeModal();

  } else {
    // If input section is empty(no content/value)
    // add a class to highlight the section red when
    // the user attempts to save this 'empty' event
    eventTitleInput.classList.add('error');
  }
}

export function deleteEvent() {
  // filter through all the events available in the local storage and 
  // only return the event(s) that are not equal to the clicked one
  events = events.filter(event => event.clickedDate !== clicked);

  // therefore resetting events to all expect the one that is clicked on
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
}

