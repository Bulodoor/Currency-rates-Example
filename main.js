//*Selectors
const amountInput = document.querySelector("#amount");
const firstCurrencyOption = document.querySelector("#firstCurrencyOption");
const secondCurrencyOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");
const currency = new Currency();

runEventListeners();

function runEventListeners() {
	amountInput.addEventListener("input", amountChanged);
}

//*Functions
function amountChanged() {
	const amount = Number(amountInput.value);
	const firstOptionValue =
		firstCurrencyOption.options[firstCurrencyOption.selectedIndex].textContent;
	const secondOptionValue =
		secondCurrencyOption.options[secondCurrencyOption.selectedIndex]
			.textContent;

	currency
		.calculate(amount, firstOptionValue, secondOptionValue)
		.then((result) => {
			resultInput.value = result.toFixed(3);
		})
		.catch((err) => console.log(err));
}

function getSymbol() {
	const firstOptionValue =
		firstCurrencyOption.options[firstCurrencyOption.selectedIndex].textContent;
	console.log(firstOptionValue);
}
