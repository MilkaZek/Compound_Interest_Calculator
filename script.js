const principalBox = document.querySelector("#principal");
const interestRateSlider = document.querySelector("#interest_rate");
const timesCompoundedBox = document.querySelector(
  "#num_of_times_compounded_per_year"
);
const totalYearsBox = document.querySelector("#total_num_of_years");
const compoundInterestOutput = document.querySelector("#compound_interest");
const totalAmountOutput = document.querySelector("#total_with_interest");
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
  const interest_rate = Number(interestRateSlider.value / 100);
  const times_compounded = Number(timesCompoundedBox.value);
  const num_of_years = Number(totalYearsBox.value);
  const total_amount =
    principal *
    (1 + interest_rate / times_compounded) ** (times_compounded * num_of_years);
  const interest_accumulated = total_amount - principal;
  compoundInterestOutput.textContent = `The Interest accumulated is $${interest_accumulated.toFixed(
    2
  )}`;
  totalAmountOutput.textContent = `The Total including the Compound Interest is $${total_amount.toFixed(
    2
  )}`;
  console.log(compound_interest);
}
