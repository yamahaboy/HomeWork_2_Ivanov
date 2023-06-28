let startValue;
let endValue = 10;

while (!startValue || isNaN(startValue)) {
  startValue = +prompt("Введите начальное число:");
}


for (let i = startValue; i <= endValue; i++) {
    let multy = i * endValue;
    console.log(multy)
  }

  