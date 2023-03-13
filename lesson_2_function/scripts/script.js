//1. Напишите цикл, который считает сумму чисел от 20 до 35
let sum = 0
for (let i = 20; i <= 35; i++){
    sum += i;
}
console.log(sum);

//2. Напишите цикл, который выводит произведение всех чисел от 10 до 15
let mult = 1;
for (let i = 10; i <= 15; i++) {
mult *= i
  }
  console.log(mult);

// 3. Дан массив чисел. Сформировать новый массив, в который войдут только положительные числа

const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5];
const posirive_numbers = []

for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0) {
        posirive_numbers.push(numbers[i])
    }
}
console.log(posirive_numbers);

// numbers - массив с числами
// i - индекс элемента массива (0-8)
// numbers[i] - элемент массива по индексу

// 4. Сформировать новый массив из четных чисел
const even_number = []
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        even_number.push(numbers[i])
    }
}
console.log(even_number);

// for(let i = 0; i < numbers.length; i++){
//   numbers[i] % 2 === 0 ? even_numbers.push(numbers[i]) : ''
// }

// Условие ? true : false

// if(условие){
//   true
// } else {
//   false
// }

// 5. Сформировать новый массив из четных отрицательных чисел => [-88]
let even_negative_num = [];
 for(let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0 && numbers[i] % 2 === 0) {
    even_negative_num.push(numbers[i]);
  }
}
console.log(even_negative_num);

// 6. Сформировать новый массив из чисел, заканчивющихся на 5 => [5, 15, 35, -5]
let ending_five = []
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 10 === 5 || numbers[i] % 10 === -5){
        ending_five.push(numbers[i])
    }
}
console.log(ending_five);

// 7. Сформировать новый массив, состоящий их последних цифр чисел
const last_child = []
for (let i = 0; i < numbers.length; i++){
last_child.push(numbers[i] % 10)
}
console.log(last_child);

// 8. Сформировать новый массив, состоящий их последних цифр чисел (без -)
const last_child2 = []
for (let i = 0; i < numbers.length; i++){
last_child2.push(numbers[i] < 0 ? numbers[i] * -1 % 10 : numbers[i] % 10)
}

console.log(last_child2);