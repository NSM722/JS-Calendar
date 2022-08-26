# Dynamic Vanilla JavaScript and CSS Calendar
This is an interactive calendar that highlights the current day of the month in a different background color from the rest of the days of the month.

When one clicks on the previous or next button, the calendar loads the month correctly and additionally loads different advices from an API rendered at the top of the calendar. 

One also has the ability to add/delete appointments/events on particular day(s). 

Additionally, the days highlighted in grey('padding days') are days of the previous month that reflect in the first week of the selected month.

Under the hood, I worked on the following concepts:

* using global CSS variables
* CSS module imports
* JS files imports
* Added comments that explain what specific parts of the code achieves
* Use of the Date-API
* Adding/Deleting event modals
* Using the WEB localStorage as a Database
Below is a snippet of the calendar:

<img width="485" alt="JS and CSS Calendar" src="https://user-images.githubusercontent.com/83452606/181231551-00f07aac-e7d3-4486-bed6-53d135621e6c.png">

---

### Separate Activity
The tables folder includes a quick activity that depicts DOM manipulation whereby I created a random table with 3 rows and 3 columns, added consecutive numbers to each table cell by using a for loop and finally styled the table with CSS
