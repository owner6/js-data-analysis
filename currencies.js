const currencies = [
	{name: "bitcoin", priceInUsd: 28500},
	{name: "etherium", priceInUsd: 1750},
	{name: "karbo", priceInUsd: 0.05},
	{name: "wax", priceInUsd: 0.07},
	{name: "sugarchain", priceInUsd: 0.000218},
	{name: "usd", priceInUsd: 1},
	{name: "token", priceInUsd: 0.00005} 
]

function convertCurrency(amount, from_currency, to_currency) {
	const fromRate = currencies.find(currencies => currencies.name === from_currency).priceInUsd
	const toRate = currencies.find(currencies => currencies.name === to_currency).priceInUsd

	//calculation coeficient
	const conversionRate = fromRate / toRate
	
	//convert	
	const convertedAmount =  amount * conversionRate 
  
		return convertedAmount 	
}

//UI
const form = document.querySelector("#converter")

form.addEventListener("submit", function(event) {
	event.preventDefault()

	const amount = document.querySelector("#amount").value
	const fromCurrency = document.querySelector("#from").value
	const toCurrency = document.querySelector("#to").value

	const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency)
	
	const resultElement = document.querySelector("#result")
	resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`
})







