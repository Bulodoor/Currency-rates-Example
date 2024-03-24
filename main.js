//*Selectors
const amountInput = document.querySelector("#amount");
const firstCurrencyOption = document.querySelector("#firstCurrencyOption");
const firstCurrencySymbol = document.querySelector("#firstCurrencySymbol");
const secondCurrencyOption = document.querySelector("#secondCurrencyOption");
const secondCurrencySymbol = document.querySelector("#secondCurrencySymbol");
const resultInput = document.querySelector("#result");

const countryMoneySymbols = [
	{
		name: "USD",
		symbol: "&#36;", // or &dollar;
	},
	{
		name: "EUR",
		symbol: "&euro;",
	},
	{
		name: "JPY",
		symbol: "&yen;",
	},
	{
		name: "GBP",
		symbol: "&pound;",
	},
	{
		name: "CHF",
		symbol: "&#67;", //&CHF;
	},
	{
		name: "TRY",
		symbol: "&#8378;", // or &amp
	},
	{
		name: "AUD",
		symbol: "&#36;", // or &dollar;
	},
	{
		name: "CAD",
		symbol: "&#36;", // or &dollar;
	},
	{
		name: "CNY",
		symbol: "&yen;",
	},
];

runEventListeners();

function runEventListeners() {
	amountInput.addEventListener("input", amountChanged);
	firstCurrencyOption.addEventListener("click", getSymbol);
	secondCurrencyOption.addEventListener("click", getSymbol);
}

//*Functions
function amountChanged() {
	const amount = Number(amountInput.value);
	const firstOptionValue =
		firstCurrencyOption.options[firstCurrencyOption.selectedIndex].textContent;
	const secondOptionValue =
		secondCurrencyOption.options[secondCurrencyOption.selectedIndex]
			.textContent;

	const currency = new Currency();
	currency
		.calculate(amount, firstOptionValue, secondOptionValue)
		.then((result) => {
			resultInput.value = result.toFixed(3);
		})
		.catch((err) => console.log(err));
}

function getSymbol(e) {
	const OptionValue = e.target.options[e.target.selectedIndex].textContent;

	for (let i = 0; i < countryMoneySymbols.length; i++) {
		if (countryMoneySymbols[i].name == OptionValue) {
			//! There is symbol
			if (e.target.id == "firstCurrencyOption") {
				//*	firstCurrencySymbol
				firstCurrencySymbol.innerHTML = `${countryMoneySymbols[i].symbol}`;
			} else {
				//*secondCurrencySymbol
				secondCurrencySymbol.innerHTML = `${countryMoneySymbols[i].symbol}`;
			}
			break;
		} else {
			//! There is not symbol
			if (e.target.id == "firstCurrencyOption") {
				//*	firstCurrencySymbol
				firstCurrencySymbol.innerHTML = "";
			} else {
				//*secondCurrencySymbol
				secondCurrencySymbol.innerHTML = "";
			}
		}
	}
	amountChanged();
}
