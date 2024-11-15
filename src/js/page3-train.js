// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

// const fruits = "B" + "a" + +"a" + "a";
// console.log(fruits.toLowerCase());

// function getLastElementMeta(array) {
//   const lastIndex = array.length - 1;
//   const lastValue = array[lastIndex];
//   return [lastIndex, lastValue];
// }
// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

/*
?Функція getExtremeElements(array) приймає один параметр array -
?масив елементів довільної довжини. Доповни код функції таким чином
?щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.
*/

// function getExtremeElements(array) {
//   const firstValue = array[0];
//   const LastIndexValue = array.length - 1;
//   const lastValue = array[LastIndexValue];
//   return [firstValue, lastValue];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// const array = [false];
// const result = array ? "A" : "B";
// console.log(result);

/*
?Функція getLength(array) очікує один параметр array - масив довільних значень.
?Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників,
?і повертала кількість символів в отриманому рядку.
*/

// function getLength(array) {
//   const sring = array.join("");

//   return sring.length;
// }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));

/*
?Сервісу гравірування прикрас потрібна функція, яка б автоматично
?рахувала ціну гравірування, залежно від кількості слів і ціни за слово.
?Оголошена функція calculateEngravingPrice(message, pricePerWord).
?Ця функція приймає першим параметром рядок, що складається зі
?слів, розділених лише пробілами (параметр message) та другим 
?параметром - число, що містить ціну гравірування
?за одне слово (параметр pricePerWord).

?Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.
*/

// function calculateEngravingPrice(message, pricePerWord) {
//   const massString = message.split(" ");
//   const numbWord = massString.length;

//   return numbWord * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

/*
?Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.
?firstTwoEls - масив із перших двох елементів
?nonExtremeEls - масив з усіх елементів, крім першого та останнього
?lastThreeEls - масив із трьох останніх елементів
*/

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

/*
?Оголоси змінну allClients та доповни код таким чином, щоб її значенням
?було посилання на масив, що складається з усіх елементів масивів
?oldClients і newClients. Спочатку мають іти елементи з масива 
?oldClients, а потім з newClients.
!console.log();
*/

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const generalClients = oldClients.concat(newClients);
// const allClients = generalClients;
// console.log(allClients);

/*
?Функція getSlice(array, value) приймає два параметра
?array - масив довільних елементів
?value - значення елемента масиву для пошуку
?Доповни код функції getSlice(array, value) так, щоб вона виконувала
?пошук значення value у масиві array і повертала
?порожній масив, якщо в array немає елемента зі значенням value.
?підмасив, що починається з початку array і до елемента зі значенням 
?value включно, якщо такий елемент є в array
!console.log();
*/

// function getSlice(array, value) {
//   const subString = array.indexOf(value);
// //   console.log(subString);
//   if (subString === -1) {
//     return [""];
//   } else {
//     return array.slice(0, subString + 1);
//   }
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));

/*
?Функція createArrayOfNumbers(min, max) приймає два параметра:
?min - ціле число, з якого починаються обчислення
?max - ціле число, до якого включно триватимуть обчислення
?Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив
?усіх цілих чисел від значення min до max включно
!console.log();
*/

// function createArrayOfNumbers(min, max) {
//   const result = [];
//   for (let i = min; i <= max; i += 1) {
//     result.push(i);
//   }
//   return result;
// }
// console.log(createArrayOfNumbers(1, 3));

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

/*
?Функція calculateTotalPrice(order) приймає один параметр order 
?масив чисел. Доповни функцію так, щоб вона повертала загальну
?суму елементів з масиву order.
!console.log();
*/

// function calculateTotalPrice(order) {
//   let total = 0;
//   console.log(total);

//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); //138

/*
?Функція getEvenNumbers(start, end) має два параметри start та end,
?які є цілими числами. Доповни код функції так, щоб вона повертала
?масив усіх парних чисел від start до end. Якщо жодного парного
?числа немає, то масив має бути пустим. Парним вважається число,
?яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.
!console.log();
*/

// function getEvenNumbers(start, end) {
//   const number = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       number.push(i);
//     }
//   }
//   return number;
// }
// console.log(getEvenNumbers(2, 5));

/*
?Функція checkStorage(storage, item) приймає два параметри:
?storage - масив рядків, що описує доступні товари на складі
?item - рядок з назвою товара, наявність якого потрібно перевірити
?Доповни код функції таким чином, щоб вона перевіряла, чи присутній 
?такий товар в масиві storage і повертала:
?рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
?рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
?Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад 
?"plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].
!console.log();
*/

// function checkStorage(storage, item) {
//   const lowerCaseWord = item.toLowerCase();
//   if (storage.includes(lowerCaseWord)) {
//     return `${item.toLowerCase()} is available to order!`;
//   } else {
//     return "Sorry! We are out of stock!";
//   }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));

/*
?Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи.
?Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
?Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5,
?оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
?Функція getCommonElements(array1, array2), приймає два масиви
?(array1 та array2) довільної довжини в якості параметрів.
?Доповни код функції:
?Створи порожній масив для зберігання нового масиву.
?Використай цикл for для ітерації кожного елемента у array1.
?У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
?Якщо він існує, то додай елемент до нового масиву.
?Поверни наповнений масив спільних елементів як результат роботи функції.
!console.log();
*/

// function getCommonElements(array1, array2) {
//   const cloneArrayElem = [];

//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       cloneArrayElem.push(array1[i]);
//     }
//   }
//   return cloneArrayElem;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]

/*
?Доповни код функції calculateTotalPrice(order) так, щоб вона повертала 
?загальну суму чисел в масиві order. Використай цикл
?for...of для перебору масиву.
!console.log();
*/

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const num of order) {
//     total += num;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

/*
? Функція createReversedArray() може приймати довільну кількість аргументів.
? Доповни код функції так, щоб вона повертала масив усіх аргументів,
? але в масиві вони повинні йти у зворотному порядку. Тобто,
? при виклику createReversedArray(1, 2, 3), функція має повернути масив
? [3, 2, 1]. Використовуй цикл або метод масиву toReversed(),
? який застосовується до масиву і результатом роботи повертає новий масив
? з елементами у зворотньому порядку.
!console.log();
*/

// function createReversedArray() {
//   const newArray = [];

//   for (let i = 0; i < arguments.length; i++) {
//     newArray.push(arguments[i]);
//   }
//   return newArray.toReversed();
// }

// console.log(createReversedArray(1, 2, 3, 4));

/*
? Функція calculateTax(amount, taxRate) оголошує два параметри:
? amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
? taxRate - число, податкова ставка. Необов'язковий параметр.
? За замовчуванням його значення має бути 0.2.
? Доповни код функції так, щоб вона повертала суму податку
? результат множення суми на податкову ставку
!console.log();
*/

// function calculateTax(amount, taxRate = 0.2) {
//   let totalSum = amount * taxRate;
//   return totalSum;
// }

// console.log(calculateTax(100, 0.1)); //10
// console.log(calculateTax(200, 0.1)); //20

// function fillArray(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i += 2) {
//     return arr.push(i);
//   }
// }

// console.log(fillArray(2, 10));

/*
?
?
?
?
!console.log();
*/
/*????!console.log();*/
