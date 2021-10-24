// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(number) {
  return Number(Array.from(String(number)).reverse().join(''));
  // uzupełnij tutaj
}

console.log('1.', reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  return array.reduce(
    (prev, curr) => (curr % 2 == 0 ? (prev += curr) : prev),
    0
  );
  // uzupełnij tutaj
}

console.log('2.', addEven(tab));
