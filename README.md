React Calculator

A simple calculator application built using React. This project implements basic arithmetic operations like addition, subtraction, multiplication, and division. The app provides a clean and user-friendly interface that mimics the functionality of a standard calculator.


Features

- Perform basic arithmetic operations: Addition, Subtraction, Multiplication, and Division.
- Clear the input and delete individual digits.
- Supports floating-point numbers.
- Responsive design for use on different screen sizes.
- Intuitive and user-friendly UI.

Technologies Used

- React: A JavaScript library for building user interfaces.
- CSS: For styling the application.
- useReducer: To manage the calculator’s state and logic.

Getting Started

Follow the instructions below to get a local copy of the project up and running.

Prerequisites

Make sure you have the following installed:

- Node.js (v12 or higher)
- npm (v6 or higher) or yarn

Installation

1. Clone the repository:

   bash
   git clone https://github.com/Knightwing1941/react_calculator.git

2. Navigate into the project directory:

   bash
   cd react-calculator

3. Install the dependencies:

   Using npm:

   bash
   npm install

   Or using yarn:

   bash
   yarn install

4. Start the development server:

   Using npm:

   bash
   npm start
   
   Or using yarn:

   bash
   yarn start

   The app should now be running on `http://localhost:3000`.

Usage

- Press the number buttons to input numbers.
- Use the `+`, `-`, `*`, and `÷` buttons to perform operations.
- Press the `=` button to evaluate the expression.
- Use the `AC` button to clear all input.
- Use the `DEL` button to delete the last digit entered.

Calculator Logic

The calculator's state is managed using the `useReducer` hook, which helps handle different actions like adding digits, choosing operations, evaluating the result, and clearing the input. The logic is split into actions like `ADD_DIGIT`, `CHOOSE_OPERATION`, `CLEAR`, `DELETE_DIGIT`, and `EVALUATE`.

Example Code Snippet

js
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      // Logic for adding digits
      break;
    case ACTIONS.CHOOSE_OPERATION:
      // Logic for choosing an operation
      break;
    case ACTIONS.EVALUATE:
      // Logic for evaluating the expression
      break;
    // More actions...
  }
}

