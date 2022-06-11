import { openModal } from "./modals.js";
import { getAdvice } from "./api.js";

// Global variable that keeps track of the month upon clicking the previous and back button
globalThis.monthCounter  = 0;

// Calendar reference
const calendar = document.getElementById('calendar');

// Days listed under the format "en-GB"
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',];

// load function - this function runs when the document loads & then displays the calendar
export function loadCalendar () {
  // create date object
  const date = new Date();
  // console.log(date);

  if (monthCounter !== 0) {
    // add/subtract monthCounter to the value of the current month when the next button is clicked
    // Below link explains about the second paramenter(1) in the setMonth method
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth#description
    date.setMonth(new Date().getMonth() + monthCounter, 1);
  }

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  console.log(day, month, year)

  // gets the first day of the month
  const firstDayOfMonth = new Date(year, month, 1)

  // find the number of days in the month in order to load the right amount of squares on the document
  // the third argument(0) in this date instance  represents the last day of the previous month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  //console.log(daysInMonth);

  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };

  // toLocaleString converts the date object to a string to enable operations on lines 49 to 52
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

  // load API
  getAdvice();

  // Looping through all padding days and days of the month and render them as squares
  for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    // Variable to render the square of dates of the current month
    const daySquare = document.createElement('div');

    // This particular day class makes the current month days conspicuous from the padding days 
    daySquare.classList.add('day');

    const clickedDateString = `${i - paddingDays}/${month + 1}/${year}`

    // Logic that determines whether we render a padding day or day square
    if(i > paddingDays) {
      // setting the day number value to the inside of the div
      // this number value is rendered in the day square
      daySquare.innerText = i - paddingDays;

      const eventForDay = events.find(event => event.clickedDate === clickedDateString);

      if (i - paddingDays === day && monthCounter === 0) {
        //add a class to the present day making it conspicuous from the rest of the days
        daySquare.id = 'currentDay';
      }
      //if there's an event create a div to hold the event text inside the day square
      if (eventForDay) {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerText = eventForDay.title;
        daySquare.appendChild(eventDiv);
      }
      
      // Event function that runs whenever the user clicks on the day square
      daySquare.addEventListener('click', () => openModal(clickedDateString));
    } else {
      // this class is less conspicuous than the day class since it's meant for actual padding days
      daySquare.classList.add('padding');
    }
    // put the day square we are on inside the calendar container
    calendar.appendChild(daySquare);
  }
}
