fetch ('https://dummyjson.com/users')
	.then(response => response.json()) 
	.then(users => {
	const weights = users.map(user => user.weight)

	const maxWeight = Math.max(...weights)
	console.log(`Максимальна вага користувача ${maxWeight}`)

	//const minHeight =

	//const maxHeight = 

	//const avgWeight = 
	//const avgHeight = 


})



