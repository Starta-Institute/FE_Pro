// Callback-функция - это функция, переданная в другую функцию в качестве аргумента

const multThree = () => 3 * 2;
const multFour = () => 4 * 2;
const multFive = () => 5 * 2;

// const multNum = a => a * 2;


// Написать функцию, которая будет принимать массив чисел и возвращать новый массив, в котором все числа умножены на 2

const multOnTwo = arr => {
  const new_arr = [];
  for(let i = 0; i < arr.length; i++){
    new_arr.push(arr[i] * 2)
  }
  return new_arr;
}

// Написать функцию, которая будет принимать массив чисел и возвращать новый массив, в котором все числа поделены на 2

const divideOnTwo = arr => {
    const new_arr = [];
    for(let i = 0; i < arr.length; i++){
      new_arr.push(arr[i] / 2)
    }
    return new_arr;
  }
  
  
  // Написать функцию, которая будет принимать массив чисел и возвращать новый массив, в котором все числа возведены в квадрат
  
  const powOnTwo = arr => {
    const new_arr = [];
    for(let i = 0; i < arr.length; i++){
      new_arr.push(arr[i] ** 2)
    }
    return new_arr;
  }
  
  
  // УНИВЕРСАЛЬНАЯ ФУНКЦИЯ
  const changeNum = (arr, func) => {
    const new_arr = [];
    for(let i = 0; i < arr.length; i++){
      new_arr.push(func(arr[i])) // передаем инструкцию - что сделать с элементом массива, прежде чем его запушить?
    }
    return new_arr;
  }
  
  const nums = [1, 2, 3, 4, 5];
  
  const multNum = a => a * 2;
  const divideNum = a => a / 2;
  const powNum = a => a ** 2;
  
  console.log(changeNum(nums, multNum)); // [2, 4, 6, 8, 10]
  console.log(changeNum(nums, divideNum)); // [0.5, 1, 1.5, 2, 2.5]
  console.log(changeNum(nums, powNum)); // [1, 4, 9, 16, 25]



// Написать универсальная функцию, которая принимает строку и callback-функцию (инструкцию), и формирует новую строку в соответствии с переданной инструкцией

// все буквы 'a' заменены на 'A'
// все буквы 'o' и 'a' заменены на *
// все буквы i заменены на 1

const changeStr = (str, callback) => {
    let new_str = ""
    for (let i = 0; i < str.length; i++){
        new_str += callback(str[i])
    }
    return new_str
}
// все буквы 'a' заменены на 'A'

const changeA = letter => letter === 'a' ? 'A' : letter

// все буквы 'o' и 'a' заменены на *

const changeOA = letter => letter === 'o' || letter === 'a' ? '*' : letter

// все буквы i заменены на 1
const changeI = letter => letter === 'i' ? '1' : letter

console.log(changeStr('cat', changeA));
console.log(changeStr('octagon', changeOA));
console.log(changeStr('intelligent', changeI));