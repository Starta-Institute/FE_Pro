// 1. Написать функцию, которая принимает массив и возвращает новый массив только со строками длиннее 6 символов и начинающихся на букву 'h'/'H'

// function filterArray(array) {
//     return array.filter(el => el.length > 6 && (el[0] === 'h' || el[0] === 'H'));
//   }
//    // Пример использования
//   const arr = ['Hello', 'world', 'how', 'are', 'you'];
//   const filteredArr = filterArray(arr);
//   console.log(filteredArr); // ["Hello"]

const greetings = ['hello', 'hello, my friend', 'good morning', 'How are you doing?', 'good afternoon'];
// => ['hello, my friend', 'how are you doing?']

const getLongStrings = arr => arr.filter(el => el.length > 6 && el[0].toLowerCase() === 'h');

console.log(getLongStrings(greetings));

//2. Написать функцию, которая принимает массив с числами и возвращает новый массив с положительными числами умноженными на 2

const numbers = [3, -8, 9, -1, 80, -33]; // [6, 18, 160]

const doublePositiveNums = arr => arr.filter(el => el > 0).map(el => el * 2);

console.log(doublePositiveNums(numbers));

//ОБЪЕКТЫ

const user = {
        firstname: 'Pasha',
        lastname: 'Hryhorash',
        age: 28,
        active: true,
        address: {
          country: 'Ukraine',
          city: 'Kyiv'
        },
        skills: ['JS', 'SQL']
      }
// 1. Вывести в консоль имя пользивателя
console.log(user.firstname);
console.log(user.age);
console.log(user.address);
console.log(user.skills);
// ИЛИ 
console.log(user['firstname']);
//console.log(user[key]);
console.log(user.key);

// 2. Написать функцию, которая принимает два аргумента - объект и название ключа. Функция возращает значение по переданному ключу

const getValue = (obj, key) => obj[key]

console.log(getValue(user, 'age'));

const users = [
    {
      id: 1,
      firstname: 'Anton',
      age: 28,
      active: true
    },
    {
      id: 2,
      firstname: 'Irina',
      age: 18,
      active: true
    },
    {
      id: 3,
      firstname: 'Olga',
      age: 32,
      active: false
    },
    {
      id: 4,
      firstname: 'Danila',
      age: 14,
      active: true
    },
    {
      id: 5,
      firstname: 'Ivan',
      age: 54,
      active: false
    }
  ]

  //1. Вывести в консоль все имена пользивателей

  users.forEach(el => console.log(el.firstname, el.age))

  // 2. Вывести в консоль информацию о каждом пользователе в формате 'Name: <name>, Age: <age>'

 users.forEach(el => console.log(`Name: ${el.firstname}, Age: ${el.age}`))

 //Диструктурирование 
 users.forEach(el => {
   const { firstname, age } = el;
   console.log('Name: ${firstname}, Age: ${age}');
 })

 users.forEach(({ firstname, age}) => console.log('Name: ${firstname}, Age: ${age}'))

 // 3. Сформировать новый массив, в который попадут только совершеннолетние пользователи 

  const adultUsers = users.filter(user => user.age >= 18);
  console.log(adultUsers);

  //Диструктурированый
  const adult_users1 = users.filter(({ age }) => age >= 18);
  console.log(adult_users1);

  // 4. Сформировать новый массив, в который попадут только имена пользователей => ['Anton', 'Irina', 'Olga', 'Danila', 'Ivan']

   const firstnames = users.map(el => el.firstname);
   console.log(firstnames); 


   // ДЗ (массив users)
// 1. Сформировать новый массив, в который попадут только возраст пользователей => [28, 18, 32, 14, 54]
// 2. Сформировать новый массив, в который попадет информация о каждом пользователе в формате 'Name: <firstname>, Age: <age>'
// 3. Сформировать новый массив, в который попадут только те пользователи, чье имя начинается на I

// ***
// 1. Сформировать новый массив, в который попадет информация о каждом совершеннолетнем пользователе в формате 'Name: <firstname>, Age: <age>'
// 2. Сформировать новый массив, в который попадут только активные и совершеннолетние пользователи
// 3. Сформировать новый массив без пользователей, чье имя начинается на букву O
// 4. Сформировать новый массив, в который попадут только имена активных и совершеннолетних пользователей в нижнем регистре

// ****
// 1. Сформировать новый массив, где пользователи будут отсортированы по возрасту (.sort())
// 2. Найти сумму возрастов всех пользователей (.reduce())