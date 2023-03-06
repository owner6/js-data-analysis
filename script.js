const numbers = [2288, 2, 120, 3102, 4482, 1463, 4913, 5435, 3000]

//нахождение максимального числа методом math.max
function findMaxMath(numbers)  {
	return Math.max(...numbers)
} 

//нахождение максимального числа методом reduse
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

//нахождение максимальноого числа из массива методом цикла
function findMax() {
	let max = numbers[0]
	let min = numbers[0]

	for (i = 0; i < numbers.length; i++) {
		if ((numbers[i]) < min) {
			min = numbers[i]
		} else if (numbers[i] > max) {
				max = numbers[i]
		}
	}
	return max
}

//нахождение среднего числа методом reduse
function findAverageReduce(numbers) {
	const sum = numbers.reduce(function(total, number) {
		return total + number
	}, 0)
	return sum / numbers.length
}



document.write(findMax()); 
document.write("<br>")
document.write(findMaxMath(numbers));
document.write("<br>")
document.write(findAverageReduce(numbers));
document.write("<br>")
document.write(findMaxReduce(numbers))




