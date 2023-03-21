const currencies = [
	{name: "bitcoin", priceInUsd: 28500},
	{name: "etherium", priceInUsd: 1750},
	{name: "karbo", priceInUsd: 0.05},
	{name: "wax", priceInUsd: 0.07},
	{name: "sugarchain", priceInUsd: 0.01},
]

let newCurrensies = currencies.filter (currency => currency.priceInUsd > 10)
console.log(newCurrensies)

function getPriceInUsd(currencyName) {
	for (let i = 0; i < currencies.length; i++) {
		if (currencies[i].name === currencyName) {
			return currencies[i].priceInUsd
		}
	}
	return null
}
console.log(getPriceInUsd("karbo"))
console.log(getPriceInUsd("bitcoin"))
console.log(getPriceInUsd("etherium"))
console.log(getPriceInUsd("sugarchain"))
console.log(getPriceInUsd("wax"))

const findCurrency = (currencyName) => currencies.findIndex (item => item.name === currencyName) 
console.log(findCurrency("wax"))
console.log(findCurrency("bitcoin"))
console.log(findCurrency("etherium"))
console.log(findCurrency("karbo"))
console.log(findCurrency("sugarchain"))