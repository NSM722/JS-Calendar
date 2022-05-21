const demo = document.querySelector('#demo');
demo.innerHTML = (`<table>
                    <caption>My Table</caption>
                    <tr><td></td><td></td><td></td></tr>
                    <tr><td></td><td></td><td></td></tr>
                    <tr><td></td><td></td><td></td></tr>
                  </table>`);

const colArr = document.getElementsByTagName("td");
//console.log(colArr.length);
let num;
for (let i = 0; i < colArr.length; i++) {
    num = i
    colArr[i].textContent = num;
}
