//..........random value generated
const randomNumber = Math.floor(Math.random() * 10 + 1);

document.getElementById("submitguess").onclick = function () {
  //...... number by user....
  const setuserguess = document.getElementById("userguess").value;
  // .....end....
  if (setuserguess == randomNumber) {
    output.style.backgroundColor = "#274690";
    output.textContent = "CONGRATS!!! YOU GUESS IS RIGHT";
  } else if (setuserguess > randomNumber) {
    output.style.backgroundColor = "#9E829C";
    output.textContent = "TRY A SMALL NUMBER";
  } else {
    output.textContent = "TRY A HIGH NUMBER";
    output.style.backgroundColor = "#FFBC0A";
  }
};
//.........answer
const hint = () => {
  return (
    (output.textContent = `The answer is: ${randomNumber}`),
    (output.style.backgroundColor = "var(--cr--red)")
  );
};

// document.getElementById("output").style.backgroundColor = "rgb(55,25,98)";
console.log(randomNumber);
