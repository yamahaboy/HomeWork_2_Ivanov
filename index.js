let lastName, firstName, patronymic, age, isMale;

while (!lastName || !isNaN(lastName)) {
  lastName = prompt("Введите вашу фамилию:");
}

while (!firstName || !isNaN(firstName)) {
  firstName = prompt("Введите ваше имя:");
}

while (!patronymic || !isNaN(patronymic)) {
  patronymic = prompt("Введите ваше отчество:");
}

while (!age || isNaN(age)) {
  age = prompt("Введите ваш возраст в годах:");
}

const gender = confirm("Ваш пол - мужской?") ? "мужской" : "женский";
// while (isMale == null) {
//   isMale = confirm("Ваш пол - мужской?");
// }
let fullName = lastName + " " + firstName + " " + patronymic;

let ageInDays = age * 365;
let futureAge = +age + 5;

// let gender = isMale ? "мужской" : "женский";

let retirementAge = isMale ? 65 : 55;
let isRetired = age >= retirementAge ? "да" : "нет";

alert(`
  Ваше ФИО: ${fullName}
  Ваш возраст в годах: ${age}
  Ваш возраст в днях: ${ageInDays}
  Через 5 лет вам будет: ${futureAge}
  Ваш пол: ${gender}
  Вы на пенсии: ${isRetired}
  `);
