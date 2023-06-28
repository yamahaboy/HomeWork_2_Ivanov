let startValue, endValue;

while (!startValue || isNaN(startValue)) {
  startValue = +prompt("Введите начальное число:");
}

while (!endValue || isNaN(endValue)) {
  endValue = +prompt("Введите конечное число:");
}

let summa = 0;

for (let i = startValue; i <= endValue; i++) {
  summa += i;
}

alert(`Сумма чисел: ${summa}`);
