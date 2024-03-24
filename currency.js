class Currency {
	constructor() {
		this.url =
			"https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_FlOL8Ud96aUyNKCNXipkXY6GccvSJ0QAT9obDcVk&base_currency=";
	}

	async calculate(amount, firstCurrencyValue, secondCurrencyValue) {
		const result = await (
			await fetch(`${this.url}${firstCurrencyValue}`)
		).json();
		const calculatedResult = amount * result.data[secondCurrencyValue];

		return calculatedResult;
	}
}
