 # Аналіз данних 
 
 ## 1 Задача 1. 
 
  Спробувати з числами попрацювати. зробити масив чисел і шукати там максимальне, мінімальне, середнє

 - max через Math
- max через For
- max через Reduce

- avg через for
- avg через reduce

- min через Math
- min через For
- min через Reduce

const numbers = [432, 23, 5, 4232, 4, 17, 6, 7, 4]

const findMax = (numbers) => {
    // code here
}

const findMin = (numbers) => {
    // code here
}

const findAverage = (numbers) => {
    // code here
}

## 2. Задача 2 
написати функцію що знаходить факторіал числа

і ще #задача на масиви і цикли:

Знайти максимально ПАРНЕ число в масиві (ділиться на 2)
- використовуючи for
- використовуючи функції масиву (filter, reduce)


## 3. Задача 3
const currencies = [
    { name: ‘bitcoin’, priceInUSD: 22454 },
    { name: ‘ethereum’, priceInUSD: 653 },
    { name: ‘carbo’, priceInUSD: 3 },
    …. можна тут ще дописати декілька
]

### 3.1 Функція яка знайде валюти які коштують більше 10 доларів

### 3.2 Функція яка знайде ціну в доларах по назві валюти.

const function getPriceInUsd(name) {
   // find and return price
}

### 3.3 Зробити функцію конвертер з валюти в долар.

const function getPriceInUsd(name, amount) {
   // return amount in usd
}

### 3.4 Зробити конфертер з долара в валюту

const function usdToCurrency(name, amountInUsd) {
   // return amount in selected currency
}

### 3.5 Зробити конвертер з валюти в валюту (через долар)

const function convert(from, to, amount) {
   // return result
}


### 4. Задача 4

Використати цю апі: https://dummyjson.com/users

- Знайти максимальну вагу користувача
- Знайти мінімальну вагу користувача
- Знайти середню вагу користувача

- Те ж саме для росту

- Знайти найвищого чоловіка/жінку

А зроби щоб можна було вивести ще користувача того
Типу вивести ім’я користувача з найбільною вагою
можеш винести це в окремі функції
типу приймає масив користувачів, повертає користувача з найбільшою вагою
І можеш також зробити окрему функцію яка http запит робить
Ну і головну функцію яка всі повикликає і виведе результат
Можеш потім ще одну функцію написати яка прийме на вхід всі необхідні значення і вставить в html
Ще щоб закріпити знання по js пропоную двома способами зробити. 
- через цикл for
- через методи масиву, map, filter, reduce