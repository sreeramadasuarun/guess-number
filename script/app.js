//..........random value generated
const randomNumber = Math.floor(Math.random() * 10) + 1;

//..........arrow function with onclick

const submitguess = () => {
  //...... number by user....
  const setuserguess = Number(document.getElementById("userguess").value);
  // .....end....
  if (setuserguess === randomNumber) {
    output.style.backgroundColor = "#274690";
    output.textContent = "CONGRATS!!! YOU GUESS IS RIGHT";
  } else if (setuserguess == "") {
    window.alert("TYPE A NUMBER 1-10 0NLY");
  } else if (setuserguess > 10) {
    output.style.backgroundColor = "var(--cr--red)";
    output.textContent = "NOT TO EXCEED 10";
  } else if (setuserguess < 1) {
    output.style.backgroundColor = "var(--cr--red)";
    output.textContent = "NOT TO EXCEED 10";
  } else if (setuserguess > randomNumber) {
    output.style.backgroundColor = "#9E829C";
    output.textContent = "TRY A SMALL NUMBER";
  } else {
    output.textContent = "TRY A HIGH NUMBER";
    output.style.backgroundColor = "#FE829c";
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
