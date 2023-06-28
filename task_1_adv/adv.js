let textHello = "пОлИнА нАбЕрЕжНаЯ";
let changedTextHello = "";

for (let i = 0; i < textHello.length; i++) {
  if (i === 0 || i === 7) {
    changedTextHello += textHello[i].toUpperCase();
  } else {
    changedTextHello += textHello[i].toLowerCase();
  }
}

console.log("Привет,", changedTextHello, "!");
