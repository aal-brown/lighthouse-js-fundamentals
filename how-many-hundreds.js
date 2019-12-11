function howManyHundreds(number) {
  let remainder = number % 100;
  let hundreds = 0;
  if (number < 100) {
    return 0;
  } else if (number >= 100) {
    hundreds = ((number - remainder) / 100);
    return hundreds;
  }
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);