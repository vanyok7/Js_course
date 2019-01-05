let str = "урок-3-был слишком легким";
console.log(str)

// 1 строка с большой буквы
let s = str[0].toUpperCase() + str.slice(1);
console.log(s)
// 2 замените все “-” на пробелы
s = str[0].toUpperCase() + str.slice(1).split('-').join(' ');
console.log("А вот без '-' :  " + s)
// 3  Из получившейся строки вырезать слово “легким”, заменить 2 последние буквы на “о”
s = str[0].toUpperCase() + str.slice(1).split('-').join(' ').replace(/легким/g,'');
console.log(s)
// буква о в конце
s = str.slice(0,-2) + "оо";
console.log(s)



//  Вывести в консоль квадратный корень из суммы кубов его элементов
let arr = [20, 33, 1, "Человек", 2, 3];
for(let i = 0; i < arr.length; i++) {
  if( isNaN(arr[i]) == 0 ) {
    console.log( Math.floor( Math.sqrt( Math.pow( arr[i],3 ))) );
  }
}