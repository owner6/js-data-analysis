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

const fromSelect = document.getElementById('from');
const imagesFrom = {
  bitcoin: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/150px-Bitcoin.svg.png',
  etherium: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/120px-Ethereum_logo_2014.svg.png',
  wax: 'https://www.castlecrypto.gg/wp-content/uploads/2021/02/wax-token-1.png',
  karbo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Krb-logo.png/600px-Krb-logo.png',
  sugarchain: 'https://sugarchain.org/logo.png',
  usd: 'https://www.pngall.com/wp-content/uploads/12/USD-Background-PNG.png'
};

const toSelect = document.getElementById('to');
const imagesTo = {
	usd: 'https://www.pngall.com/wp-content/uploads/12/USD-Background-PNG.png'
};

const dropList = document.querySelector('.drop-list select');






