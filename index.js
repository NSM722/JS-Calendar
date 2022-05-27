// Create container variable for holding the table and added a class to it
const container = document.createElement("div");
container.setAttribute("class", "container");
document.body.append(container);

// Table Variable
const Table = document.createElement("table");
container.append(Table);

// Table Caption variable
const tableCaption = document.createElement("caption");
tableCaption.textContent = "May 2022";
Table.append(tableCaption);

// Table headers, rows and columns
let days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

for(let i = 0; i < days.length; i++) {
  const tableHeaders = document.createElement("th")
  Table.append(tableHeaders);
}



