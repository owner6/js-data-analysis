const currencies = [
	{name: "bitcoin", priceInUsd: 28500},
	{name: "etherium", priceInUsd: 1750},
	{name: "karbo", priceInUsd: 0.05},
	{name: "wax", priceInUsd: 0.07},
	{name: "sugarchain", priceInUsd: 0.01},
]

function newCurrensiesObj() {
let newCurrensies = currencies.filter (currency => currency.priceInUsd > 10)
	return newCurrensies
}
console.log(newCurrensiesObj())

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

const findObj = (currencyName) => {
	let currency = currencies.find (item => item.name === currencyName) 
		if (currency) {
			return currency.priceInUsd
		} else  {
				 return null
		  }
}

document.write("wax: ")
document.write(findObj("wax"))
document.write("<br>")
document.write("bitcoin: ")
document.write(findObj("bitcoin"))
document.write("<br>")
document.write("karbo: ")
document.write(findObj("karbo"))
document.write("<br>")
document.write("etherium: ")
document.write(findObj("etherium"))
document.write("<br>")
document.write("sugarchain: ")
document.write(findObj("sugarchain"))
document.write("<br>")

