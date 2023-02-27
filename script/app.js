//..........random value generated
const randomNumber = Math.floor(Math.random() * 10 + 1);

document.getElementById("submitguess").onclick = function () {
  //...... number by user....
  const setuserguess = document.getElementById("userguess").value;
  // .....end....
  if (setuserguess == randomNumber) {
    output.textContent = "CONGRATS!!! YOU GUESS IS RIGHT";
  } else if (setuserguess > randomNumber) {
    output.style.backgroundColor = "rgb(66,75,98)";
    output.textContent = "TRY A SMALL NUMBER";
  } else {
    output.textContent = "TRY A HIGH NUMBER";
    output.style.backgroundColor = "rgb(166,75,98)";
  }
};
//.........answer
const hint = () => {
  return (output.textContent = `The answer is: ${randomNumber}`);
};

// document.getElementById("output").style.backgroundColor = "rgb(55,25,98)";
console.log(randomNumber);
