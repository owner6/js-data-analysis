const numbers = [2288, 2, 120, 3102, 4482, 1463, 4913, 5435, 3000]

const findMax1 = (numbers) =>  {
	return Math.max(...numbers)
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

document.write(findMax()); 
document.write("<br>")
document.write(findMax1(numbers));




