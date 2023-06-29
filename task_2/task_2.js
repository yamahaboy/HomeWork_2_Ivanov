let tripWay = prompt("Куда хотите отправиться?").toLowerCase();

switch (tripWay) {
  case "юг":
    alert("На юг пойдешь счастье найдешь");
    break;
  case "север":
    alert("На север пойдешь много денег найдешь");
    break;
  case "запад":
    alert("На запад пойдешь верного друга найдешь");
    break;
  case "восток":
    alert("На восток пойдешь разработчиком станешь");
    break;
  default:
    alert("Жалко, что ты на работе ;)");
}
