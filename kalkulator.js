const angka = parseFloat(prompt("angka pertama "));
const operator = prompt("(+,-,*,/) masukan operator");
const angka2 = parseFloat(prompt("angka kedua: "));

switch (operator) {
  case "+":
    result = angka + angka2;
    alert(`${result}`);
    break;

  case "-":
    result = angka - angka2;
    alert(`${result}`);
    break;

  case "*":
    result = angka * angka2;
    alert(`${result}`);
    break;

  case "/":
    result = angka / angka2;
    alert(`${result}`);
    break;
}
