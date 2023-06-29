let takeFirstNumber, takeAway, add, multiply, divide;

while (!takeFirstNumber || isNaN(takeFirstNumber)) {
  takeFirstNumber = +prompt("Введите начальное число:");
}

while (!takeAway || isNaN(takeAway)) {
  takeAway = +prompt("Сколько отнять?");
}

while (!add || isNaN(add)) {
  add = +prompt("Сколько прибавить?");
}
while (!multiply || isNaN(multiply)) {
  multiply = +prompt("Сколько умножить?");
}
while (!divide || isNaN(divide)) {
  divide = +prompt("Сколько разделить от предыдущего результата?");
}

let answer = ((takeFirstNumber - takeAway + add) * multiply) / divide;

alert(
  `((((${takeFirstNumber} - ${takeAway}) + ${add}) * ${multiply}) / ${divide}) = ${answer}`
);
