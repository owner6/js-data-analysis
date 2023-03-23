const numbers = [2288, 2, 120, 3102, 4482, 1463, 4913, 5435, 3000]

//search max number math method
function findMaxMath(numbers)  {
	return Math.max(...numbers)
} 

//search max number reduse method
function findMaxReduce(numbers) {
	let max = numbers.reduce(function(sum, current) {
		if (sum < current) {
			return current 
		} else {
				return sum
		} 
	})
	return max
}

//search max number array for method
function findMaxFor() {
	let max = numbers[0]

	for (i = 0; i < numbers.length; i++) {
		if (numbers[i] > max) {
			max = numbers[i]
		}
	}
	return max
}

//search average number for method
function findAverageFor(numbers) {
	let sum = 0
	for (i = 0; i < numbers[i]; i++) {
		sum = sum + numbers[i]
  } 
  return (sum / numbers.length)
}

//нахождение average number reduse method
function findAverageReduce(numbers) {
	const sum = numbers.reduce(function(total, number) {
		return total + number
	}, 0)
	return sum / numbers.length
}

//search min number Math method
function findMinMath(numbers) {
	return Math.min(...numbers)
}

//search min number for method
function findMinFor() {
	let min = numbers[0]
	
	for (i = 0; i < numbers.length; i++) {
		if ((numbers[i]) < min) {
			min = numbers[i]
		}
	}
	return min
}

//factorial number for method
function factorial(n) {
	let result = 1
	
	for (let i = 1; i <= n; i++) {
		result = result * i;
	}
	return result
}

//search even numbers in array for method
function evenNumbers(numbers) {
	const findEvenNumber = []
	for (let i = 0; i < numbers.length; i++) {
		if ((numbers[i] % 2) === 0) {
			findEvenNumber.push(numbers[i])
		} 
	}
	return findEvenNumber
}

//average values of all numbers by reduce method
function average() {
	let total = evenNumbers(numbers).reduce(function(sum, current) {
		return sum + current
	}, 0)
	return total / numbers.length
}
document.write(average())
document.write("<br>")

//filter+map+reduce
let evenNumbersFilterMethod = numbers.filter((elem) => (elem % 2 == 0))
let squaresMap = evenNumbersFilterMethod.map((num) => (num * num ))
let sumSquaresNumbers = squaresMap.reduce((acum, number) => (acum + number), 0)

document.write(sumSquaresNumbers)
document.write("<br>")

/*
.filter
.map
.reduce
*/

const evenNumbersFilter = (numbers) => numbers.filter (num => num % 2 === 0)

document.write("Нахождение парных чисел методом filter ")
document.write(evenNumbersFilter(numbers))
document.write("<br>")

document.write("Нахождение парных числ методом for ")
document.write(evenNumbers(numbers))
document.write("<br>")

document.write("Нахождение максимального числа методом math ")
document.write(findMaxMath(numbers)); 
document.write("<br>")

document.write("Нахождение максимального числа методом reduse ")
document.write(findMaxReduce(numbers));
document.write("<br>")

document.write("Нахождение максимальноого числа из массива методом for ")
document.write(findMaxFor(numbers))
document.write("<br>")

document.write("Нахождение среднего числа методом reduse ")
document.write(findAverageReduce(numbers));
document.write("<br>")

document.write("Нахождение среднего числа методом for ")
document.write(findAverageFor(numbers));
document.write("<br>")

document.write("Нахождение минимального числа методом math ")
document.write(findMinMath(numbers))
document.write("<br>")

document.write("Нахождение минимального числа методом for ")
document.write(findMinFor(numbers))
document.write("<br>")

function calculateFactorial() {
	let n = document.getElementById("factorial-number").value
	let result = factorial(n)
	document.getElementById("factorial-result").innerHTML = "Факториал числа" + n + "=" + result
}
const factorialButtonElement = document.getElementById("factorial-button")
factorialButtonElement.addEventListener("click", calculateFactorial);

