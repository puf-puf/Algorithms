function testCard(card: string): boolean {
  if (card.length < 13 || card.length > 19) return false;
  let sum = 0;
  let shouldDouble = false;

  for (let i = card.length - 1; i >= 0; i--) {
    const digit = Number(card[i]);

    if (isNaN(digit)) return false;
    if (shouldDouble) {
      let doubled = digit * 2;
      if (doubled > 9) doubled -= 9;
      sum += doubled;
    } else {
      sum += digit;
    }

    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

console.log(testCard("4111111111111111")); // true
console.log(testCard("5105105105105100")); // true
console.log(testCard("378282246310005")); // true
console.log(testCard("1234567812345678")); // false
console.log(testCard("1234567879855431")); // false
