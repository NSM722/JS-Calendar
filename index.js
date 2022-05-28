import { getDayName } from "./date.js";

const calendar = document.querySelector(".container");

const months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

/*let randomDate = new Date(2022, 4);
let currentMonth = months[randomDate.getMonth()];

const title = document.createElement("h1");
title.textContent = `${currentMonth} 2022`;*/

for(let day = 1; day <= 31; day++) {

  const dayName = getDayName(day);

  //Show the day's name only for the first 7 days
  let name = "";
  if(day <= 7) {
    const dayName = getDayName(day);
    name = `<div class="name">${dayName}</div>`
  }

  calendar.insertAdjacentHTML("beforeend",
  `<div class="day">${name} ${day}</div>`);
}
