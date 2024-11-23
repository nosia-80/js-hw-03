/*
 * Напиши функцию `getAllPropValues(arr, prop)`, которая получает массив объектов и
 * имя свойства. Возвращает массив значений определённого свойства `prop` из
 * каждого объекта в массиве.
 */

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const allPropValues = [];

  for (const obj of arr) {
    const keys = Object.keys(obj);

    if (keys.includes(prop)) {
      allPropValues.push(obj[prop]);
    }

    // if (obj[prop]) {
    //   allPropValues.push(obj[prop]);
    // }
  }

  return allPropValues;
};

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
console.log(getAllPropValues(products, 'category')); // []
