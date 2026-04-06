console.log("Starting My project...");

const subBtn = document.querySelector("button");

const nmaeInput = document.querySelector("#name");

const restbtn = document.querySelector("#btn");

//loopContent

const loopContentDiv = document.querySelector("#loopContent");

const greetingDiv = document.querySelector("#greeting");

//ageLogic div
const ageLogic = document.querySelector("#ageLogic");

//getting and storing user[s name]
nmaeInput.addEventListener("input", () => {
  localStorage.setItem("name", nmaeInput.value);
  console.log(nmaeInput.value);
});

//getting and storing user's age
const Dob = document.querySelector("#DoB");
Dob.addEventListener("input", () => {
  const birthYear = new Date(Dob.value).getFullYear();
  const today = new Date().getFullYear();

  let age = today - birthYear;
  let ageInMonth = (age) => {
    return age * 12;
  };
  console.log(ageInMonth(age));

  localStorage.setItem("age", ageInMonth(age));
});
// get the age from localStorage
let actualAge = localStorage.getItem("age");
// age evaluation logic
function ageEvaluationLogic() {
  if (actualAge >= 216) {
    ageLogic.textContent = "You are mature and can access adult content";
  } else if (actualAge < 216 && actualAge >= 60) {
    ageLogic.textContent = "You are too young to access adult content";
  } else {
    ageLogic.textContent = "Please put valid age";
  }
}

function loopQaute() {
  let quote = "Take time To improve , but don't waste time to prove";

  return quote;
}

//display btn

function displayResult() {
  const formSec = document.querySelector("#form-section");
  formSec.style.display = "none";
  const resultSec = document.querySelector("#result");
  resultSec.style.display = "block";
  ageEvaluationLogic();

  for (let i = 1; i <= 5; i++) {
    loopContentDiv.textContent = loopQaute();
  }

  localStorage.clear();
}

//get name from local storage
const jina = localStorage.getItem("name");

//greetingFunction

function greeting(jina) {
  return `Hello ${jina}`;
}
greetingDiv.textContent = greeting(jina);

//reset btn

function resetbtn() {
  const formSec = document.querySelector("#form-section");
  formSec.style.display = "block";
  const resultSec = document.querySelector("#result");
  resultSec.style.display = "none";
}
