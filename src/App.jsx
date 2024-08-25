import UserInput from "./components/UserInput";
import Header from "./components/Header";
import InvestmentResults from "./components/InvestmentResults";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleUserInput(inputName, value) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputName]: +value,
      };
    });
  }

  let validInput = isValid(userInput);

  return (
    <>
      <Header></Header>
      <UserInput
        userInput={userInput}
        handleInput={handleUserInput}
      ></UserInput>
      {!validInput && <p className="center">Please enter a valid number</p>}
      {validInput && (
        <InvestmentResults annualData={userInput}></InvestmentResults>
      )}
    </>
  );
}

//Checks if the user input is valid
function isValid(userInput) {
  let objectValues = Object.values(userInput);
  for (let i = 0; i < 4; i++) {
    if (objectValues[3] < 1 || objectValues[i] < 0) {
      return false;
    }
  }
  return true;
}

export default App;
