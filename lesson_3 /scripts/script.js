//4. Написать функцию, которая принимает два числа - основание степени и степень и возвращает результат возведения числа в степень
function power(base, exponent) {
    return Math.pow(base, exponent);
  }
  const result = power(2, 5)
  console.log(result);

  // 5. Сгенерировать случайное целое число от 0 до 10. Вывести его в консоль. 
  const randomNumber = Math.floor(Math.random() * 11);
  const randomNumber2 = Math.round(Math.random() * 10)
console.log(randomNumber2);

// 6. Сгененировать случайное целое число от 10 до 20
const random = Math.round(Math.random() * 10 + 10)
console.log(random);

// 7. Сгененировать случайное целое число от 15 до 30
const random1 = Math.round(Math.random() *15 +15)
console.log(random1);

// 9. Написать функцию, которая принимает массив со строками. И формирует новый массив со строками, чья длина превышает 5 символов

const greetings = ['hello', 'hi', 'good morning', 'good afternoon', 'hey']; // ['good morning', 'good afternoon']

const getLongWords = arr => {
  const result = [];
  for(let i = 0; i < arr.length; i ++){
    if(arr[i].length > 5){
      result.push(arr[i])
    }
  }
  return result
}

console.log(getLongWords(greetings));