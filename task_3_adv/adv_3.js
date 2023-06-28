let startValue, endValue;

while (!startValue || isNaN(startValue)) {
  startValue = prompt("Введите начальное число:");
}

while (!endValue || isNaN(endValue)) {
  endValue = prompt("Введите конечное число:");
}

while (startValue <= endValue) {
  console.log(startValue);
  startValue++;
}



