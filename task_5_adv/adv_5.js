let startValue;
let endValue = 10;

while (!startValue || isNaN(startValue)) {
  startValue = +prompt("Введите начальное число:");
}

for (let i = 1; i <= endValue; i++) {
  let multy = startValue * i;
  console.log(startValue, "*", i, "=", multy);
}
