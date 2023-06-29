function searchWords(line) {
  const stringLine = line.split(" ");

  const stringLineSearching = stringLine.map(
    (words) => words.charAt(0).toUpperCase() + words.slice(1).toLowerCase()
  );

  const changeLine = stringLineSearching.join(" ");

  return changeLine;
}

const userLine = "пОлИнА нАбЕрЕжНаЯ";
// const userLine = "кАк тВОи деЛА";
const userLineCorrection = searchWords(userLine);
const showLine = `Привет, ${userLineCorrection}!`;

console.log(showLine);
