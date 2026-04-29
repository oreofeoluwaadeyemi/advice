//DOM ELEMENTS
let generateBtn = document.querySelector("button");
let adviceId = document.querySelector("#advice-id");
let adviceText = document.querySelector("#advice-text");

generateBtn.addEventListener("click", async () => {
  generateBtn.classList.toggle("animate-pulse");

  let res = await fetch("https://api.adviceslip.com/advice");
  let data = await res.json();

  adviceId.textContent = `ADVICE #${data.slip.id}`;
  adviceText.textContent = `"${data.slip.advice}`;
});
