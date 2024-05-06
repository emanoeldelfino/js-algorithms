function convertToRoman(num) {
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const letters = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let remainder = num;
  let count = 0;
  let number;
  let roman = '';

  do {
    number = Math.floor(remainder / nums[count]);
    remainder %= nums[count];

    if (number > 0) {
      roman += letters[count].repeat(number);
    }
    count++;
  } while (remainder > 0);

  return roman;
}

console.log(convertToRoman(444));
console.log(convertToRoman(999));
console.log(convertToRoman(3999));

