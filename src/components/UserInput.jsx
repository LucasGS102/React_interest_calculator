export default function UserInput({ handleInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            value={userInput.initialInvesment}
            onChange={(event) => {
              handleInput("initialInvestment", event.target.value);
            }}
            required
          ></input>
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleInput("annualInvestment", event.target.value)
            }
            required
          ></input>
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleInput("expectedReturn", event.target.value)
            }
            required
          ></input>
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) => handleInput("duration", event.target.value)}
            required
          ></input>
        </p>
      </div>
    </section>
  );
}
