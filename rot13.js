function rot13(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode = charCode <= 77 ? charCode + 13 : charCode - 13;
      newStr += String.fromCharCode(charCode);
    } else {
      newStr += str[i];
    }
  }

  // str.split('').forEach(char => {
  //   if (char.match(/[A-Z]/)) {
  //     let charCode = char.charCodeAt(0);
  //     charCode = charCode <= 77 ? charCode + 13 : charCode - 13;
  //     newStr += String.fromCharCode(charCode);
  //   } else {
  //     newStr += char;
  //   }
  // });

  return newStr;

}

console.log(rot13("SERR PBQR PNZC"));

