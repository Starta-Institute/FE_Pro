//.forEach() - выполняет указанною функцию один раз для каждого элемента массива, ничего не возвращает 

// .map() - выполняет указанную функцию один раз для каждого элемента массива, возвращает новый массив 

//.filter() - возвращает новый массив, в который попадают те элементы которые прошли указаную проверку


const numbers = [4, 6, 1, 17,  9, 15, 27, 43, 7]
//Императивный подход - КАК сделать?
const numbers_pow0 = []
for(let i = 0; i < numbers.length; i++){
    numbers_pow0.push(numbers[i] ** 3)
}

const numbers_pow = []
numbers.forEach(el => numbers_pow.push(el ** 3))

//Деклараьтвный подход - ЧТО сделать?
const numbers_pow2 = numbers.map(el => el ** 3)

//2. Сформировать новый массив, в который попадут все последние цифры

const numbers_lastchild = [] //.forEach
numbers.forEach(el => numbers_lastchild.push(el % 10))
console.log(numbers_lastchild);

const lastDigits = numbers.map(el => el % 10) // .map
console.log(lastDigits);

//3. Сформировать новый массив, в который попадут все элементы из исходного массива. Если длина элемента меньше 6 (<), то добавить к этой строке 1

const strings = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure']

const strins_6elem = []
strings.forEach(el => el.length < 6 ? strins_6elem.push(el + '1') : strins_6elem.push(el))
console.log(strins_6elem);


 const str_plusEl = strings.map(el => el.length < 6 ? el + '1' : el);
 console.log(str_plusEl);

 //4. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива. Если число четное, то поделить на 2, а если нечетное - умножить на 2

 //.forEach
 const modifiedNumbers = []
 numbers.forEach(el => modifiedNumbers.push(el % 2 === 0 ? el / 2 : el * 2))
console.log(modifiedNumbers);

//.map
 const modifiedNumbers_2 = numbers.map(el => el % 2 === 0 ? el / 2 : el * 2);
 console.log(modifiedNumbers_2);


 //5. Дан массив с разными типами данных. Сформировать новый массив - если элемент являуться числом заменить его на строку 'number' 

 const arr = [3, 'hello', true, 'hi' ,7 , 10, false]

 const newArr = arr.map(el => typeof el === 'number' ? 'number' : el) 
 console.log(newArr);

 //6. Дан массив с числами. Сформировать новый массив - если число меньше 0, то вернуть в массив 'negativ', а если больше 'positive'

 const nums = [3, -9, 100, -7, -4, 33]
 const posNegat_num = nums.map(el => el > 0 ? 'positive' : 'negative')
 console.log(posNegat_num);




