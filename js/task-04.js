/*
 * Напиши функцию `countTotalSalary(employees)`, принимающую объект зарплат.
 * Функция считает общую сумму зарплаты работников и возвращает её. Каждое поле
 * объекта, передаваемого в функцию, имеет вид `"имя": "зарплата"`.
 */

const countTotalSalary = function (employees) {
  const salaries = Object.values(employees);
  let totalSalary = 0;

  for (const salary of salaries) {
    totalSalary += salary;
  }

  return totalSalary;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
