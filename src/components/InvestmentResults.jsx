import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function InvestmentResults({ annualData }) {
  const data = calculateInvestmentResults(annualData);
  console.log(data);

  const initialInvestment = annualData.initialInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((annualData) => {
          const totalInterest =
            annualData.valueEndOfYear -
            initialInvestment -
            data[0].annualInvestment * annualData.year;
          const investedCapital =
            initialInvestment + data[0].annualInvestment * annualData.year;
          return (
            <tr key={annualData.year}>
              <td>{annualData.year}</td>
              <td>{formatter.format(annualData.valueEndOfYear)}</td>
              <td>{formatter.format(annualData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
