## convertStringToNumber

```javascript
function convertStringToNumber(string, x) {
  if (arguments.length < 2) {
    x = 10;
  }
  var chars = string.split("");
  var number = 0;
  var i = 0;
  var sign = 1;
  if (chars[0] === "0") {
    chars.shift();
    if (chars[0] === "b" || chars[0] === "B") {
      chars.shift();
      chars.reverse();
      while (i < chars.length) {
        number +=
          (chars[i].codePointAt(0) - "0".codePointAt(0)) * Math.pow(2, i);
        i++;
      }
    } else if (chars[0] === "o" || chars[0] === "O") {
      chars.shift();
      chars.reverse();
      while (i < chars.length) {
        number +=
          (chars[i].codePointAt(0) - "0".codePointAt(0)) * Math.pow(8, i);
        i++;
      }
    }
  } else {
    if (chars[0] == "-") {
      chars.shift();
      sign = -1;
    }
    while (i < chars.length && chars[i] != ".") {
      number = number * x;
      number += chars[i].codePointAt(0) - "0".codePointAt(0);
      i++;
    }
    if (chars[i] === ".") {
      i++;
    }
    var fraction = 1;
    while (i < chars.length) {
      fraction = fraction / x;
      number += (chars[i].codePointAt(0) - "0".codePointAt(0)) * fraction;
      i++;
    }
  }
  return number;
}
convertStringToNumber("10.0123");
```

## convertNumberToString

```javascript
function convertNumberToString(number, x) {
  var integer = Math.floor(number);
  var fraction = number - integer;
  var string = "";
  var sign = "";
  if (integer == 0) {
    string = "0";
  }
  if (integer < 0) {
    sign = "-";
    integer = Math.abs(integer);
  }
  while (integer > 0) {
    string = String(integer % x) + string;
    integer = Math.floor(integer / x);
  }
  if (fraction > 0) {
    string = string + ".";
  }
  while (fraction > 0) {
    string = string + Math.floor(fraction * x);
    fraction = fraction * x - Math.floor(fraction * x);
  }
  return sign + string;
}
convertNumberToString(100, 10);
```
