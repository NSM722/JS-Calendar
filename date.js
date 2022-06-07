// Keeps track of the month
let monthCounter  = 0;

// day clicked on
let clicked = null;

// array of event objects - the array is manipulated depenging on the user adding or deleting events
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

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
}


/*export const getDayName = day => {
  //Date object & Date.UTC
  const date = new Date(2022, 7, day);
  
  const options = { weekday: "short" };*/
  
  // Intl.DateTimeFormat
  /*const dayName = newIntl.DateTimeFormat("en-GB",
  options).format(date);*/
  /*return new Intl.DateTimeFormat("en-GB",
  options).format(date);
}*/
