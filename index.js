/*import { getDayName } from "./date.js";

const calendar = document.querySelector(".container");

const months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];*/

/*let randomDate = new Date(2022, 4);
let currentMonth = months[randomDate.getMonth()];

const title = document.createElement("h1");
title.textContent = `${currentMonth} 2022`;*/

/*for(let day = 1; day <= 31; day++) {

  const dayName = getDayName(day);

  //Show the day's name only for the first 7 days
  let name = "";
  if(day <= 7) {
    const dayName = getDayName(day);
    name = `<div class="name">${dayName}</div>`
  }

  calendar.insertAdjacentHTML("beforeend",
  `<div class="day">${name} ${day}</div>`);
}*/

// Keeps track of the month
let nav  = 0;

// day clicked on
let clicked = null;

// array of event objects - the array is manipulated depenging on the user adding or deleting events
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

// Calendar reference
const calendar = document.getElementById('calendar');

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',];

// load function - this function runs when the document loads & then displays the calender
function loadCalendar () {
  // create date object
  const date = new Date();
  // console.log(date);

  if (nav !== 0) {
    // add/subtract nav to the value of the current month when the next button is clicked
    date.setMonth(new Date().getMonth() + nav);
  }

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  console.log(day, month, year)

  const firstDayOfMonth = new Date(year, month, 1)

  // find the number of days in the month in order to load the right amount of squares on the document
  // the third argument(0) in this date instance  represents the last day of the previous month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  //console.log(daysInMonth);

  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = firstDayOfMonth.toLocaleDateString('en-GB', options);

  // Visualizing the date string in order to understand how to 
  // split it(with a comma and a space) and only retrieve the day
  console.log(dateString)

  // variable to store the number of days before the first day of the current month
  // these are the days of the previous month
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
  // console.log(paddingDays); '6 - six days before 1-May-2022'

  // Get the name of the current month and populate the calendar
  document.getElementById('monthDisplay').innerText = 
    `${date.toLocaleDateString('en-GB', { month: 'long' })} ${year}`;

  // reset the calendar each time the loadCalendar() function is called
  // this helps in clearing out the squares or everything inside the 
  // calendar div when the buttons event listeners are triggered
  calendar.innerHTML = "";

  // Looping through all padding days and days of the month and render them as squares
  for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    // Variable to render the square of dates of the current month
    const daySquare = document.createElement('div');

    // This particular day class makes the current month days conspicuous from the padding days 
    daySquare.classList.add('day');

    // Logic that determines whether we render a padding day or day square
    if(i > paddingDays) {
      // setting the day number value to the div
      // this number value is rendered in the day square
      daySquare.innerText = i - paddingDays;

      // Event function that runs whenever the user clicks on the day square
      daySquare.addEventListener('click', () => console.log('click'))
    } else {
      // this class is less conspicuous than the day class since it's meant for actual padding days
      daySquare.classList.add('padding');
    }
    // put the day square we are on inside the calendar container
    calendar.appendChild(daySquare);
  }
}

// event listeners for the back and next buttons
// the buttons increment or decrement the nav variable and then call the load Calendar function
function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    loadCalendar();
  });

  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    loadCalendar();
  });
}

initButtons();
loadCalendar();