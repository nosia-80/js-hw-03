/*
 * Напиши функцию `findBestEmployee(employees)`, которая принимает объект
 * сотрудников и возвращает имя самого продуктивного (который выполнил больше всех
 * задач). Сотрудники и кол-во выполненных задач содержатся как свойства объекта в
 * формате `"имя": "кол-во задач"`.
 */

const findBestEmployee = function (employees) {
  const keys = Object.keys(employees);
  let maxTasks = 0;
  let bestEmployee = '';

  for (const key of keys) {
    if (employees[key] > maxTasks) {
      maxTasks = employees[key];
      bestEmployee = key;
    }
  }

  return bestEmployee;
};

// const findBestEmployee = function (employees) {
//   const entries = Object.entries(employees);
//   let maxTasks = 0;
//   let bestEmployee = '';

//   for (const [employee, tasks] of entries) {
//     if (tasks > maxTasks) {
//       maxTasks = tasks;
//       bestEmployee = employee;
//     }
//   }

//   return bestEmployee;
// };

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
