# odin-calculator
This repo houses a calculator for The Odin Project.
It supports all basic calc-functions (sum, substract, multiply, divide).
Display-font used: [Digital-7 by Style 7](https://www.fontspace.com/digital-7-font-f7087).

# TODO
- [x] Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
- [x] Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
  - [x] There should also be a display for the calculator, go ahead and fill it with some dummy numbers so you can get it looking right.
  - [x] Add a “clear” button.
- [x] Create the functions that populate the display when you click the number buttons… you should be storing the "display value" in a variable somewhere for use in the next step.
- [x] Make the calculator work! You'll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
  - [x] You should already have the code that can populate the display, so once operate() has been called, update the display with the "solution" to the operation.
  - [x] This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don't feel bad if it takes you a while to figure out the logic.
- [x] Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42.
- [x] Check these possible issues:
  - [x] Your calculator should not evaluate more than a single pair of numbers at a time.
  - [x] You should round answers with long decimals so that they don't overflow the screen.
  - [x] Pressing = before entering all of the numbers or an operator could cause problems!
  - [x] Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”.
  - [x] Display a snarky error message if the user tries to divide by 0… don't let it crash your calculator!
- [ ] EXTRA CREDIT GOALS:
  - [ ] Add keyboard support!
  - [ ] Make it look nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons.
  - [ ] Add a “backspace” button, so the user can undo if they click the wrong number.
  - [ ] Users can get floating point numbers if they do the math required to get one, but they can't type them in yet. Add a . button and let users input decimals! Make sure you don't let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there's already one in the display)
