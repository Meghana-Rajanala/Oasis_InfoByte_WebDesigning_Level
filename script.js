const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonValue = button.innerHTML;
    if (buttonValue === "C") {
      display.innerHTML = 0;
    } else if (buttonValue === "=") {
      display.innerHTML = eval(display.innerHTML);
    } else if (buttonValue === "&larr;") {
      display.innerHTML = display.innerHTML.slice(0, -1);
    } else {
      if (display.innerHTML === "0") {
        display.innerHTML = buttonValue;
      } else {
        display.innerHTML += buttonValue;
      }
    }
  });
});