const currencies = [
	{name: "bitcoin", priceInUsd: 28500},
	{name: "etherium", priceInUsd: 1750},
	{name: "karbo", priceInUsd: 0.05},
	{name: "wax", priceInUsd: 0.07},
	{name: "sugarchain", priceInUsd: 0.01},
]

let newCurrensies = currencies.filter (currency => currency.priceInUsd > 10)
console.log(newCurrensies)

currencies.forEach (function(array_item, index) {
	console.log(array_item)
})
