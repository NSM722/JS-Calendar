export const getAdvice = () => {
  let output = document.querySelector("#advice");
  const API = "https://api.adviceslip.com/advice"
  fetch(API)
    .then(response => response.json())
    .then(data => {
      output.textContent = data.slip.advice;
    })
    .catch(error => {
      console.error(error);
    });
}
