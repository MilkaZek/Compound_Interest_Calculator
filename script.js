const principalBox = document.querySelector("#principal");
const interestRateSlider = document.querySelector("#interestRate");
const timesCompoundedBox = document.querySelector(
  "#numOfTimesCompoundedPerYear"
);
const totalYearsBox = document.querySelector("#totalNumOfYears");
const compoundInterestOutput = document.querySelector("#compoundInterest");
const totalAmountOutput = document.querySelector("#totalWithInterest");
const aprText = document.querySelector("#aprText");

interestRateSlider.addEventListener("input", () => {
  aprText.textContent = interestRateSlider.value;
});
principalBox.addEventListener("input", updateCompoundInterest);
interestRateSlider.addEventListener("input", updateCompoundInterest);
timesCompoundedBox.addEventListener("input", updateCompoundInterest);
totalYearsBox.addEventListener("input", updateCompoundInterest);

function updateCompoundInterest() {
  const principal = Number(principalBox.value);
  const interestRate = Number(interestRateSlider.value / 100);
  const timesCompounded = Number(timesCompoundedBox.value);
  const numOfYears = Number(totalYearsBox.value);
  const totalAmount =
    principal *
    (1 + interestRate / timesCompounded) ** (timesCompounded * numOfYears);
  const interestAccumulated = totalAmount - principal;
  compoundInterestOutput.textContent = `The Interest accumulated is $${interestAccumulated.toFixed(
    2
  )}`;
  totalAmountOutput.textContent = `The Total including the Compound Interest is $${totalAmount.toFixed(
    2
  )}`;
  console.log(interestAccumulated);
}
