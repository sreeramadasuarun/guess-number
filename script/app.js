"use strict";

//..........random value generated
let randomNumber = Math.floor(Math.random() * 10) + 1;
const score = document.getElementById("totalscore");

let setguess = 5;
let setscore = 0;

guess.textContent = setguess;

//..........arrow function with onclick
const submitguess = () => {
  //...... user input....
  const setuserguess = Number(
    document.getElementById("presentuserguess").value
  );

  console.log(setguess);
  if (setguess <= 0) {
    output.textContent = " GAME OVER: " + setguess + " GUESS ";
    gamereset.style.display = "block";
    output.style.backgroundColor = "var(--cr--red)";
  } else {
    if (setuserguess === randomNumber) {
      output.style.backgroundColor = "#274690";

      gamereset.style.display = "block";
      output.textContent =
        "CONGRATULATIONS!!! YOU GUESSED IT RIGHT  " + setguess + " GUESS ";
      //.............pending work on score ++
      setscore.innerHTML = setguess;
      //..............
      this.usersubmitguess.style.display = "none";
    } else if (setuserguess == "") {
      window.alert("TYPE A NUMBER 1-10 0NLY");
    } else if (setuserguess > 10) {
      output.style.backgroundColor = "var(--cr--red)";
      output.textContent = "NOT TO EXCEED 10";
    } else if (setuserguess > randomNumber) {
      output.style.backgroundColor = "#9E829C";
      output.textContent = "TRY A SMALL NUMBER";
      setguess--;
    } else {
      output.textContent = "TRY A HIGH NUMBER";
      output.style.backgroundColor = "#FE829c";
      setguess--;
    }
  }

  this.presentuserguess.value = "";
  console.log(setguess);
  guess.textContent = setguess;
};

//.........Give up button
const hint = () => {
  return (
    (output.textContent = `The answer is: ${randomNumber}`),
    (output.style.backgroundColor = "var(--cr--red)")
  );
};

//answer
console.log("Answer is: " + randomNumber);

//.....reset
const Reset = () => {
  setguess = "5";
  guess.textContent = setguess;
  gamereset.style.display = "none";
  usersubmitguess.style.display = "block";
  randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
  output.textContent = "";
  output.style.backgroundColor = "";
};
