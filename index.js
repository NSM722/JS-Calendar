const container = document.createElement("div");
container.setAttribute("class", "container");
const table = document.createElement("table");

const rows = 6;
const cols = 7;

for (let i = 0; i < rows; i++) {
  const tableRow = document.createElement("tr");
  table.append(tableRow);
  let day = 1
  for (let j = 0; j < cols; j++) {
    let tableCol = document.createElement("td");
    tableCol.textContent = day;
    tableRow.append(tableCol);
    day++;
  }
}


container.append(table);
document.body.append(container);

const nextButton = document.createElement("a");
nextButton.setAttribute("id", "next");
nextButton.textContent = "Next"
nextButton.setAttribute("href", "https://www.facebook.com");
document.body.append(nextButton);


