function palindrome(str) {
  let fStr = str.toLowerCase().split('').filter(char => char.match(/[a-z0-9]/gi));
  console.log(fStr);
  return fStr.every((char, index) => {
    return char === fStr[fStr.length - 1 - index];
  });
}

console.log(palindrome("1 eye for of 1 eye."));

