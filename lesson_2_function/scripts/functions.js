// ФУНКЦИИ


//Function declaration - объявления функции через слово function 

//Написать функцию, которая принимает в качестве фргумента число и возвращает число * 10
function multNum(num){
    return num * 10
}

console.log(multNum(5)); //50
console.log(multNum(34)); //340
console.log(multNum()); //NaN - not a number (не число)


//Arrow function(стрелочная функция)
////Написать функцию, которая принимает в качестве фргумента число и возвращает число * 10

const multNum_arrow = (num) => {
    return num * 10
}
// const multNum_arrow = num => num * 10
console.log(multNum_arrow(23)); // 230

function sumNum (num1, num2){
    return num1 + num2
}

console.log(sumNum (4, 6));


const sumNum_arrow = (num1 , num2) => num1+num2
console.log(sumNum_arrow(4, 6));